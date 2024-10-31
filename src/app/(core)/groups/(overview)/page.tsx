'use client'
import React, { useState, useEffect } from 'react'
import GroupCard from '@/components/GroupCard'
import { createClient } from '../../../../utils/supabase/client'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import BellIcon from '../../../../../public/assets/icons/BellIcon.svg'
import MyGroups from '@/components/MyGroups'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { PiUsersFour } from 'react-icons/pi'
import { CiCalculator1 } from 'react-icons/ci'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { PiGlobeStand } from 'react-icons/pi'
import { PiLaptop } from 'react-icons/pi'
import { LuLanguages } from 'react-icons/lu'
import Science from '../../../../../public/assets/icons/Science.svg'
import { getLoggedInUser } from '@/utils/actions/user.actions'
import { Group, User, Admin } from '@/types/index'
import { GroupSubject } from '@/types/models/index'

const SUBJECTS = [
  {
    id: 1,
    name: 'All Groups',
    icon: PiUsersFour
  },
  {
    id: 2,
    name: 'Math',
    icon: CiCalculator1
  },
  {
    id: 3,
    name: 'Science',
    icon: Science
  },
  {
    id: 4,
    name: 'English',
    icon: HiOutlineBookOpen
  },
  {
    id: 5,
    name: 'Social Science',
    icon: PiGlobeStand
  },
  {
    id: 6,
    name: 'Computing',
    icon: PiLaptop
  },
  {
    id: 7,
    name: 'Languages',
    icon: LuLanguages
  }
]

export default function GroupsPage(): JSX.Element {
  const supabase = createClient()
  const [groups, setGroups] = useState<Group[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedSubject, setSelectedSubject] = useState<GroupSubject>(
    GroupSubject.AllGroups
  )
  const [admins, setAdmins] = useState<Admin[]>()
  const [user, setUser] = useState<User>()
  useEffect(() => {
    const fetchUserAndGroups = async () => {
      try {
        const loggedInUser = await getLoggedInUser()
        setUser(loggedInUser)

        setLoading(true)

        // Fetch groups
        const { data: groupsData, error: groupsError } = await supabase
          .from('groups')
          .select('*')
          .contains('member_ids', [loggedInUser.uuid])

        if (groupsError) {
          throw groupsError
        }

        if (groupsData) {
          setGroups(groupsData)

          // Fetch admins data for all groups
          const adminIds = [
            ...new Set(groupsData.map((group: Group) => group.admin_id))
          ]
          if (adminIds.length > 0) {
            const { data: adminsData, error: adminsError } = await supabase
              .from('users')
              .select('user_id, name, avatar')
              .in('user_id', adminIds)

            if (adminsError) {
              throw adminsError
            }

            if (adminsData) {
              const adminsMap = adminsData.reduce((acc: any, admin: any) => {
                acc[admin.user_id] = { name: admin.name, avatar: admin.avatar }
                return acc
              }, {})
              setAdmins(adminsMap)
            }
          }
        }
      } catch (error: any) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUserAndGroups()
  }, [supabase])

  const filteredGroups =
    selectedSubject === 'All Groups'
      ? groups
      : groups.filter((group) => group.subject === selectedSubject)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <section className="mb-12">
        <div className="flex justify-between items-center mt-14">
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl">
            My Groups
          </h2>
          <Button text="+ Create Group"></Button>
        </div>
        <MyGroups />
      </section>
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl mb-4 sm:mb-0">
            Explore Groups
          </h2>
          <div className="relative w-full sm:w-auto">
            <input
              id="search_bar"
              placeholder="Search Groups"
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-[51px] rounded-xl border border-surface-gray-600 border-solid pl-[22px] pr-[13px]"
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <ul className="flex gap-x-2 mt-6 pb-2">
            {SUBJECTS.map((subject: any) => (
              <li
                key={subject.id}
                className={`rounded-full py-2 px-2 border border-solid border-primary-blue cursor-pointer flex-shrink-0 ${
                  selectedSubject === subject.name
                    ? 'bg-primary-blue text-white'
                    : 'bg-white'
                }`}
                onClick={() => setSelectedSubject(subject.name)}
              >
                <div className="flex items-center">
                  {subject.icon === Science ? (
                    <Image
                      src={subject.icon}
                      alt={subject.name}
                      className="w-4 h-4"
                    />
                  ) : (
                    <subject.icon className="w-4 h-4" />
                  )}
                  <p className="font-bold ml-2 whitespace-nowrap">
                    {subject.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <GroupCard groups={filteredGroups} />
      </section>
    </div>
  )
}

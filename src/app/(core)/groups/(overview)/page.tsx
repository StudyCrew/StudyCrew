'use client';
import React, { useState, useEffect } from 'react';
import GroupCard from '@/components/GroupCard';
import { createClient } from '../../../../utils/supabase/client';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { HiMagnifyingGlass } from "react-icons/hi2";
import BellIcon from "../../../../../public/assets/icons/BellIcon.svg";
import MyGroups from '@/components/MyGroups';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { PiUsersFour } from "react-icons/pi";
import { CiCalculator1 } from "react-icons/ci";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeStand } from "react-icons/pi";
import { PiLaptop } from "react-icons/pi";
import { LuLanguages } from "react-icons/lu";
import Science from "../../../../../public/assets/icons/Science.svg";

const Subjects = [
  {
    id: 1,
    name: "All Groups",
    icon: PiUsersFour,
  },
  {
    id: 2,
    name: "Math",
    icon: CiCalculator1,
  },
  {
    id: 3,
    name: "Science",
    icon: Science,
  },
  {
    id: 4,
    name: "English",
    icon: HiOutlineBookOpen,
  },
  {
    id: 5,
    name: "Social Science",
    icon: PiGlobeStand,
  },
  {
    id: 6,
    name: "Computing",
    icon: PiLaptop,
  },
  {
    id: 7,
    name: "Languages",
    icon: LuLanguages,
  },
];

export default function GroupsPage(): JSX.Element {
  const supabase = createClient();
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('All Groups');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true);
        const { data, error, status } = await supabase
          .from('groups')
          .select('*');

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          setGroups(data);
        }
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [supabase]);

  const filteredGroups = selectedSubject === 'All Groups'
    ? groups
    : groups.filter((group) => group.subject === selectedSubject);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <header className="w-full flex justify-between items-center">
        <div className="relative flex justify-between">
          {/* Seacrh bar */}
          <input id="search_bar" placeholder="Search study groups, tutors, learning paths" className="w-[683px] h-[51px] rounded-xl border border-surface-gray-600 border-solid pl-[22px] pr-[13px]" />
          <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <HiMagnifyingGlass className="w-6 h-6" />
          </button>
        </div>
        <div>
          {/* Notifications */}
          <button>
            <Image src={BellIcon} alt="Notifications" className="w-8 h-8"/>
          </button>
        </div>
      </header>
      <section className="mr-[45px]">
        <div className="w-full flex justify-between items-center font-rubik font-bold text-[26px] leading-[30.81px] mt-[56px]">
          <h2 className="font-rubik font-bold text-[26px] leading-[31px]">My Groups</h2>
          <Button text="+ Create Group" className="w-[130px] h-9"></Button>
        </div>
        <MyGroups />
      </section>
      <section className="mr-[45px] mt-6 pb-4">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-rubik font-bold text-[26px] leading-[31px]">Explore Groups</h2>
          <div className="relative">
            {/* Seacrh bar */}
            <input id="search_bar" placeholder="Search Groups" className="w-[788px] h-[51px] rounded-xl border border-surface-gray-600 border-solid pl-[22px] pr-[13px]" />
            <button type="button" className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div>
          <ul className="flex gap-x-2 mt-6">
            {Subjects.map((subject: any) => (
              <li
                key={subject.id}
                className={`rounded-full p-2 border border-solid cursor-pointer ${
                  selectedSubject === subject.name ? 'bg-primary-blue text-white' : 'bg-white'
                }`}
                onClick={() => setSelectedSubject(subject.name)}
              >
                <div className="flex items-center">
                  {subject.icon === Science ? (
                    <Image src={subject.icon} alt={subject.name} className="w-4 h-4" />
                  ) : (
                    <subject.icon className="w-4 h-4" />
                  )}
                  <p className="text-[14px] font-bold ml-2">{subject.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <GroupCard groups={filteredGroups} />
      </section>
    </div>
  );
}
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'
import { PiPencilSimple } from 'react-icons/pi'
import { usePathname, redirect } from 'next/navigation'
import Button from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { type User } from '@supabase/supabase-js'
import { getLoggedInUser } from '@/utils/actions/user.actions'
import NotificationPopup from '@/components/widgets/notifications/notification-popup'

export default function ProfileDetailPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<string>('')
  const [name, setName] = useState<string>()
  const [about, setAbout] = useState<string>()
  const [showGroups, setShowGroups] = useState<boolean>(false)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClient()
  const pathname = usePathname()

  const editAvatar = () => {
    const redirectUrl = `${pathname}/account`
    redirect(redirectUrl)
  }

  const getProfile = async (userId: string) => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('users')
        .select('name, about, avatar')
        .eq('user_id', userId)
        .single()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(error.message)
      }
      if (!data) {
        console.error('No profile data found')
        throw new Error('Profile data not found')
      }

      setName(data.name ?? null)
      setAbout(data.about ?? null)
      setAvatar(data.avatar ?? null)
    } catch (error) {
      alert(`Error fetching profile data!, ${error}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser()
      if (loggedInUser) {
        setUser(loggedInUser)
        await getProfile(loggedInUser.id)
      }
    }
    fetchUser()
  }, [])

  const handleSignOut = (): void => {
    const form = document.createElement('form')
    form.method = 'post'
    form.action = '/auth/signout'
    document.body.appendChild(form)
    form.submit()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col w-full gap-12">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 max-w-screen-lg mx-auto w-full">
        <p>Space for search bar...</p>
        <NotificationPopup />
      </header>

      <div className="w-full lg:w-3/5 mx-auto px-4 md:px-0 flex items-center justify-between gap-20">
        <section className={'w-1/3'}>
          <h2 className="text-2xl font-bold">Profile</h2>
          <div className="flex flex-col items-center justify-between p-6 w-full h-[594px] mt-4 bg-[#fcfcfd] rounded-xl">
            <div className="relative flex justify-center w-fit">
              <Image
                src={avatar && 'https://github.com/shadcn.png'}
                width={150}
                height={150}
                alt="User Avatar"
                className="rounded-full"
              />
              <div className="absolute bottom-0 right-0">
                <button
                  onClick={editAvatar}
                  className="bg-primary-500 p-2.5 rounded-lg"
                >
                  <PiPencilSimple className="text-white" />
                </button>
              </div>
            </div>
            <div className="text-center pt-6">
              <h3 className="text-lg font-bold">{name}</h3>
            </div>
            <article className="w-full h-[72px] mt-3">
              <p className="text-[14px] font-dmSans leading-[18.23px]">
                {about}
              </p>
            </article>
            <div className="mt-[152px]">
              <Button
                className="mt-4 uppercase text-[16px] leading-[20.83px] font-bold font-dmSans"
                text="Edit Profile"
              />
            </div>
          </div>
        </section>

        {/* Settings Section */}
        <section className={'w-2/3'}>
          <h2 className="text-2xl font-bold">Settings</h2>
          <div className="flex flex-col items-start p-6 w-full h-[594px] mt-4 bg-[#fcfcfd] rounded-xl gap-y-4">
            {/* Account Settings */}
            <div>
              <h2 className="text-[22px] font-medium leading-[26.07px]">
                Account
              </h2>
              <form className="flex flex-col gap-y-[27px]">
                <div className="flex flex-col items-start gap-[11px] mt-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent"
                    placeholder="shawnkhan@email.com"
                  />
                </div>
                <div className="flex flex-col items-start gap-[11px]">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="bg-transparent"
                    placeholder="*********"
                  />
                </div>
                <Button
                  className="mt-4 uppercase w-[90px] h-[36px] text-[12px] leading-[15.62px] font-bold font-dmSans"
                  text="Edit Login"
                />
              </form>
            </div>

            {/* Privacy Settings */}
            <div className={'w-4/5'}>
              <h2 className="text-[22px] font-medium leading-[26.07px]">
                Privacy
              </h2>
              <div className="flex flex-col gap-y-4 mt-3">
                <div className="flex justify-between items-center w-full">
                  <p className="font-dmSans text-[18px] leading-[23.44px]">
                    Show Study Groups on Profile
                  </p>
                  <Switch
                    checked={showGroups}
                    onCheckedChange={(checked) => setShowGroups(checked)}
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-dmSans text-[18px] leading-[23.44px]">
                    Show Statistics on Profile
                  </p>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={(checked) =>
                      setEmailNotifications(checked)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Notifications Settings */}
            <div className={'w-4/5'}>
              <h2 className="text-[22px] font-medium leading-[26.07px]">
                Notifications
              </h2>
              <div className="flex justify-between items-center w-full mt-3">
                <p className="font-dmSans text-[18px] leading-[23.44px]">
                  Enable Email
                </p>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={(checked) => setEmailNotifications(checked)}
                />
              </div>
            </div>

            {/* Logout and Delete Account Buttons */}
            <div className="flex gap-x-7 mt-9">
              <Button
                className="uppercase text-[12px] leading-[15.62px] font-bold font-dmSans bg-gray-200 border border-solid border-gray-600 text-gray-600"
                text="Log Out"
                onClick={handleSignOut}
              />
              <Button
                className="uppercase text-[12px] leading-[15.62px] font-bold font-dmSans bg-error-600"
                text="Delete Your Account"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

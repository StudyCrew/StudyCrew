'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Image from 'next/image'
import Avatar from './avatar'
import Button from '@/components/ui/button'
import Logo from '../../../public/assets/Logo.svg'
import { Switch } from '@/components/ui/switch'

interface AccountFormProps {
  user: User | null
}

const usernameLimit = 100
const aboutLimit = 400

export default function AccountForm({ user }: AccountFormProps): JSX.Element {
  const supabase = createClient()
  const [loading, setLoading] = useState<boolean>(true)
  const [name, setName] = useState<string>('')
  const [about, setAbout] = useState<string>('')
  const [avatar, setAvatar] = useState<string | null>(null)
  const [showGroups, setShowGroups] = useState<boolean>(false)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= usernameLimit) {
      setName(e.target.value)
    }
  }

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= aboutLimit) {
      setAbout(e.target.value)
    }
  }

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('users')
        .select('name, about, avatar')
        .eq('user_id', user?.id)
        .single()

      if (error) throw new Error(error.message)
      if (!data) throw new Error('Profile data not found')

      setName(data.name ?? null)
      setAbout(data.about ?? null)
      setAvatar(data.avatar ?? null)

      if (data.avatar) {
        await getAvatar(data.avatar)
      }

      await getSettings()
    } catch (error) {
      console.error('Error fetching profile data:', error)
      alert('Error fetching profile data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  const getAvatar = async (avatarPath: string | null): Promise<void> => {
    if (avatarPath) {
      try {
        const { data: avatarData, error: avatarError } = await supabase.storage
          .from('avatars')
          .download(avatarPath)

        if (avatarError) throw new Error(avatarError.message)

        const url = URL.createObjectURL(avatarData)
        setAvatar(url)
      } catch (error) {
        console.error('Error fetching avatar:', error)
        alert('Error fetching avatar!')
      }
    }
  }

  const getSettings = async (): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('show_groups, email_notifications')
        .eq('user_id', user?.id)
        .single()

      if (error && error.message !== 'No rows found') {
        throw new Error(error.message)
      }

      if (data) {
        setShowGroups(data.show_groups)
        setEmailNotifications(data.email_notifications)
      }
    } catch (error) {
      console.error('Error fetching settings:', error)
      alert('Error fetching settings!')
    }
  }

  useEffect(() => {
    if (user) {
      void getProfile()
    }
  }, [user, getProfile])

  const handleUpdateClick = async (): Promise<void> => {
    try {
      setLoading(true)

      let avatarFile: File | null = null
      if (avatar) {
        avatarFile = await convertUrlToFile(avatar)
      }

      await updateProfile({
        name,
        about,
        avatar: avatarFile
      })
      await updateSettings({ showGroups, emailNotifications })
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Error updating the profile!')
    } finally {
      setLoading(false)
    }
  }

  const convertUrlToFile = async (url: string): Promise<File> => {
    const response = await fetch(url)
    const blob = await response.blob()

    const file = new File([blob], 'avatar.svg', {
      type: 'image/svg+xml'
    })
    return file
  }

  const updateProfile = async ({
    name: newName,
    about: newAbout,
    avatar: newAvatar
  }: {
    name: string | null
    about: string | null
    avatar: File | null
  }): Promise<void> => {
    try {
      setLoading(true)

      let avatarUri: string | null = null
      if (newAvatar) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(`${user?.id}.svg`, newAvatar, {
            cacheControl: '3600',
            upsert: true
          })

        if (error) throw new Error(error.message)

        avatarUri = data.path ?? null
      }

      const { error } = await supabase.from('users').upsert({
        user_id: user?.id,
        name: newName,
        about: newAbout,
        avatar: avatarUri
      })

      if (error) throw new Error(error.message)

      alert('Profile updated!')
    } catch (error) {
      console.error('Error updating profile:', error)
      alert('Error updating the profile data!')
    } finally {
      setLoading(false)
    }
  }

  const updateSettings = async ({
    showGroups: newShowGroups,
    emailNotifications: newEmailNotifications
  }: {
    showGroups: boolean
    emailNotifications: boolean
  }): Promise<void> => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .eq('user_id', user?.id)
        .single()

      if (error && error.message !== 'No rows found') {
        throw new Error(error.message)
      }

      if (data) {
        const { error: updateError } = await supabase
          .from('settings')
          .update({
            show_groups: newShowGroups,
            email_notifications: newEmailNotifications
          })
          .eq('user_id', user?.id)

        if (updateError) throw new Error(updateError.message)
      } else {
        const { error: insertError } = await supabase.from('settings').insert({
          user_id: user?.id,
          show_groups: newShowGroups,
          email_notifications: newEmailNotifications
        })

        if (insertError) throw new Error(insertError.message)
      }

      alert('Settings updated!')
    } catch (error) {
      console.error('Error updating settings:', error)
      alert('Error updating settings!')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = (): void => {
    const form = document.createElement('form')
    form.method = 'post'
    form.action = '/auth/signout'
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div className="h-full">
      <header className="flex flex-row items-center justify-start p-4 gap-2 w-full">
        <Image
          src={Logo}
          alt="StudyCrew Logo"
          className="w-[45px] h-[45px] fill-white"
        />
        <h1 className="relative fontFamily-rubik text-primary-500 text-[30px] font-bold">
          StudyCrew
          <span className="absolute uppercase bg-[#D3E4FF] text-[8px] text-gray-900 rounded-md px-1 py-0.5 -right-5 bottom-0">
            beta
          </span>
        </h1>
        <h2 className="font-bold text-center text-[40px] w-full">
          Create Your Profile
        </h2>
      </header>
      <div className="grid grid-cols-2 h-full px-[125px] gap-10 py-10">
        <div>
          <h3 className="text-2xl font-bold">Avatar</h3>
          <Avatar onAvatarChange={(newAvatar) => setAvatar(newAvatar)} />
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Account</h3>
            <div className="bg-gray-200 rounded-lg py-[25px] px-[35px] flex flex-col gap-3">
              <div className="relative flex flex-col">
                <label htmlFor="fullName">Username</label>
                <input
                  id="fullName"
                  type="text"
                  value={name ?? ''}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your username"
                  className="border border-grey rounded-lg px-2 outline-none focus:ring-2 focus:ring-primary-500"
                  maxLength={usernameLimit}
                />
                <span
                  className={`absolute right-3 bottom-1 text-xs text-gray-600 ${
                    usernameLimit - name?.length <= 10
                      ? 'text-red-500'
                      : 'text-gray-600'
                  }`}
                >
                  {name?.length}/{usernameLimit}
                </span>
              </div>
              <div className="relative flex flex-col">
                <label htmlFor="about">About</label>
                <textarea
                  id="about"
                  rows={4}
                  value={about ?? ''}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Excited to join the community and share knowledge!"
                  className="border border-grey rounded-lg px-2 outline-none focus:ring-2 focus:ring-primary-500"
                  maxLength={aboutLimit}
                />
                <span
                  className={`absolute right-3 bottom-1 text-xs text-gray-600 ${
                    aboutLimit - about?.length <= 10
                      ? 'text-red-500'
                      : 'text-gray-600'
                  }`}
                >
                  {about?.length}/{aboutLimit}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Settings</h3>
            <div className="bg-gray-200 rounded-lg py-[25px] px-[35px] flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <p>Show Study Groups on Profile</p>
                <Switch
                  checked={showGroups}
                  onCheckedChange={(checked) => setShowGroups(checked)}
                />
              </div>
              <div className="flex justify-between items-center">
                <p>Enable Email Notifications</p>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={(checked) => setEmailNotifications(checked)}
                />
              </div>
            </div>
            <Button
              className="uppercase rounded-lg py-0.5 px-2 w-full"
              onClick={handleUpdateClick}
              disabled={loading}
              text={loading ? 'Loading ...' : 'Join StudyCrew'}
            />
          </form>
        </div>
      </div>
      <div className="bg-primary-100 py-1">
        <p className="text-center text-xs">
          The avatar style{' '}
          <a
            href="https://www.dicebear.com/styles/big-ears/"
            className="underline hover:text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Big Ears"
          </a>{' '}
          from{' '}
          <a
            href="https://www.dicebear.com/"
            className="underline hover:text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            DiceBear
          </a>{' '}
          is a remix of{' '}
          <a
            href="https://www.figma.com/community/file/986078800058673824"
            className="underline hover:text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Face Generator"
          </a>{' '}
          by{' '}
          <a
            href="https://thevisual.team/"
            className="underline hover:text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Visual Team
          </a>
          , licensed under{' '}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            className="underline hover:text-primary-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
          .
        </p>
      </div>
    </div>
  )
}

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

export default function AccountForm({ user }: AccountFormProps): JSX.Element {
  const supabase = createClient()
  const [loading, setLoading] = useState<boolean>(true)
  const [name, setName] = useState<string | null>(null)
  const [about, setAbout] = useState<string | null>(null)
  const [avatar, setAvatar] = useState<string | null>(null)
  const [showGroups, setShowGroups] = useState<boolean>(false)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false)

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

      // Si el avatar existe, descarga la imagen
      if (data.avatar) {
        const { data: avatarData, error: avatarError } = await supabase.storage
          .from('avatars')
          .download(data.avatar)

        if (avatarError) throw new Error(avatarError.message)

        const url = URL.createObjectURL(avatarData)
        setAvatar(url)
      }

      await getAvatar(data.avatar)
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
    await updateProfile({
      name,
      about,
      avatar: avatar ? convertUrlToFile(avatar) : null
    })
    await updateSettings({ showGroups, emailNotifications })
  }

  const convertUrlToFile = (url: string): File => {
    // Convert URL to File (for the sake of this example, create a dummy file)
    // You might need a more sophisticated method in a real-world scenario
    return new File([url], 'avatar.svg', { type: 'image/svg' })
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
        console.log('Uploading avatar:', newAvatar)

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

      console.log('Settings Data:', data)
      if (error && error.message !== 'No rows found') {
        throw new Error(error.message)
      }

      if (data) {
        // Actualizar si ya existe
        const { error: updateError } = await supabase
          .from('settings')
          .update({
            show_groups: newShowGroups,
            email_notifications: newEmailNotifications
          })
          .eq('user_id', user?.id)

        if (updateError) throw new Error(updateError.message)
      } else {
        // Insertar si no existe
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
              <div className="flex flex-col">
                <label htmlFor="fullName">Username</label>
                <input
                  id="fullName"
                  type="text"
                  value={name ?? ''}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-grey rounded-lg px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="about">About</label>
                <textarea
                  id="about"
                  rows={4}
                  value={about ?? ''}
                  onChange={(e) => setAbout(e.target.value)}
                  className="border border-grey rounded-lg px-2"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Settings</h3>
            <div className="bg-gray-200 rounded-lg py-[25px] px-[35px] flex flex-col gap-3">
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
      <div className="bg-primary-100">
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
            "Big Ears" by Becca Viscott
          </a>
          .
        </p>
      </div>
    </div>
  )
}

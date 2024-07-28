'use client'
import Avatar from './avatar'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Button from '@/components/ui/button'

interface AccountFormProps {
  user: User | null
}

export default function AccountForm({ user }: AccountFormProps): JSX.Element {
  const supabase = createClient()
  const [loading, setLoading] = useState<boolean>(true)
  const [name, setName] = useState<string | null>(null)
  const [about, setAbout] = useState<string | null>(null)
  const [avatar, setAvatar] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('users')
        .select('name, about, avatar')
        .eq('user_id', user?.id)
        .single()

      if (error) {
        throw new Error(error.message)
      }

      if (!data) {
        throw new Error('Profile data not found')
      }

      setName(data.name ?? null)
      setAbout(data.about ?? null)
      setAvatar(data.avatar ?? null)
    } catch (error) {
      alert('Error fetching profile data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    if (user) {
      void getProfile()
    }
  }, [user, getProfile])

  const updateProfile = async ({
    name: newName,
    about: newAbout,
    avatar: newAvatar
  }: {
    name: string | null
    about: string | null
    avatar: string | null
  }): Promise<void> => {
    try {
      setLoading(true)

      const { error } = await supabase.from('users').upsert({
        user_id: user?.id,
        name: newName,
        about: newAbout,
        avatar: newAvatar,
      })

      if (error) {
        throw new Error(error.message)
      }

      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateClick = async (): Promise<void> => {
    await updateProfile({ name, about, avatar })
  }

  const handleSignOut = (): void => {
    const form = document.createElement('form')
    form.method = 'post'
    form.action = '/auth/signout'
    document.body.appendChild(form)
    form.submit()
  }

  return (
    <div className="form-widget flex flex-col h-screen w-full justify-center items-center gap-2">
      <div className="flex justify-center items-center">
        <Avatar
          uid={user?.id ?? null}
          url={avatar}
          size={150}
          onUpload={(url) => {
            setAvatar(url)
            void updateProfile({ name, about, avatar: url })
          }}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={user?.email ?? ''}
          className="border border-grey rounded-lg px-2"
          disabled
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={name ?? ''}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className="border border-grey rounded-lg px-2"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="about">About</label>
        <input
          id="about"
          type="text"
          value={about ?? ''}
          onChange={(e) => {
            setAbout(e.target.value)
          }}
          className="border border-grey rounded-lg px-2"
        />
      </div>

      <div className="flex gap-2">
        <Button
          className="rounded-lg py-0.5 px-2 w-full"
          onClick={handleUpdateClick}
          disabled={loading}
          text={loading ? 'Loading ...' : 'Update'}
        />
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleSignOut}
          text="Sign out"
          className="rounded-lg py-0.5 px-2 w-full"
        />
      </div>
    </div>
  )
}

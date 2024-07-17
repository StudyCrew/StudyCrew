'use client'
import Avatar from './avatar'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import Button from '@/components/ui/button'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    website,
    avatar_url
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id!,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString()
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget flex flex-col h-screen w-full justify-center items-center gap-2">
      <div className="flex justify-center items-center">
        <Avatar
          uid={user?.id ?? null}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ fullname, username, website, avatar_url: url })
          }}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={user?.email}
          className="border border-grey rounded-lg px-2"
          disabled
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={(e) => {
            setFullname(e.target.value)
          }}
          className="border border-grey rounded-lg px-2"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          className="border border-grey rounded-lg px-2"
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="url"
          value={website || ''}
          onChange={(e) => {
            setWebsite(e.target.value)
          }}
          className="border border-grey rounded-lg px-2"
        />
      </div>

      <div className="flex gap-2">
        <Button
          className="rounded-lg py-0.5 px-2 w-full"
          onClick={async () => {
            await updateProfile({ fullname, username, website, avatar_url })
          }}
          disabled={loading}
          text={loading ? 'Loading ...' : 'Update'}
        />
      </div>

      <div className="flex gap-2">
        <form action="/auth/signout" method="post">
          <Button
            type="submit"
            text="Sign out"
            className="rounded-lg py-0.5 px-2 w-full"
          />
        </form>
      </div>
    </div>
  )
}

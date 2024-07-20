import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'

interface AvatarProps {
  uid: string | null
  url: string | null
  size: number
  onUpload: (url: string) => void
}

const Avatar: React.FC<AvatarProps> = ({ uid, url, size, onUpload }) => {
  const supabase = createClient()
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const downloadImage = async (path: string): Promise<void> => {
      try {
        const { data, error } = await supabase.storage
          .from('avatars')
          .download(path)

        if (error) {
          throw error
        }

        const imageUrl = URL.createObjectURL(data)
        setAvatarUrl(imageUrl)
      } catch (error) {
        alert('Error downloading image')
      }
    }

    if (url) {
      downloadImage(url)
    }
  }, [url, supabase])

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const suffix = window.crypto.getRandomValues(new Uint32Array(1))[0]
      const filePath = `${uid}-${suffix}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex justify-center items-center">
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="avatar no-image"
          style={{ height: size, width: size }}
        />
      )}
      <div style={{ width: size }}>
        <label
          className="cursor-pointer bg-primary-500 py-0.5 px-2 text-white font-bold rounded-lg"
          htmlFor="single"
        >
          {uploading ? 'Uploading ...' : 'Upload image'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute'
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  )
}

export default Avatar

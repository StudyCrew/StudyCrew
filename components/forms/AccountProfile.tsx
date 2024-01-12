'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { type ChangeEvent, useState } from 'react'
import { type IUser } from '@/lib/models/user'
import { updateUser } from '@/lib/actions/user.actions'
import { useForm } from '@mantine/form'
import { type formUser } from '@/lib/interface/formUser'
import { type AccountProfileProps } from '@/lib/interface/components/accountProfile'
import Image from 'next/image'
import { Input } from '../ui/input'
import Textarea from '../ui/textarea'
import Button from '../ui/button'
import FileInput from '../ui/fileinput'

const AccountProfile = (props: AccountProfileProps): JSX.Element => {
  const router = useRouter()
  const pathname = usePathname()

  const { user } = props
  const form = useForm({
    initialValues: {
      image: user?.image ? user.image : '',
      username: user?.username ? user.username : '',
      name: user?.name ? user.name : '',
      bio: user?.bio ? user.bio : ''
    }
  })
  const [imageString, setImageString] = useState<string>(form.values.image)

  const onSubmit = async (values: formUser): Promise<void> => {
    console.log(values)
    const payload: IUser = {
      _id: '',
      username: values.username,
      name: values.name,
      bio: values.bio,
      clerkId: user.clerkId,
      image: values.image,
      onboarded: true
    }

    await updateUser(payload, pathname)
    if (pathname === '/profile/edit') {
      router.back()
    } else {
      router.push('/')
    }
  }

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>
  ): JSX.Element | undefined => {
    const target = event?.target as HTMLInputElement

    if (target.files === null) {
      return
    }

    const file: File = target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        // Access the image data via reader.result
        const imageData: string | ArrayBuffer | null = reader.result
        if (imageData) {
          // Do something with the image data here
          if (typeof imageData === 'string') {
            const stringResult = imageData.toString() ?? ''
            setImageString(stringResult)
            form.values.image = stringResult
          }
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit(values).catch((err: Error) => {
          console.error(err)
        })
      })}
      className="flex flex-col justify-start gap-10"
    >
      {form.values.image ? (
        <Image
          src={imageString}
          alt="profile_icon"
          width={96}
          height={96}
          priority
          className="rounded-full object-contain"
        />
      ) : (
        <Image
          src="/assets/profile.svg"
          alt="profile_icon"
          width={24}
          height={24}
          className="object-contain"
        />
      )}
      <FileInput
        label="Profile picture"
        placeholder="Add profile photo"
        className="account-form_image-input"
        accept="image/*"
        cb={(e) => {
          handleImage(e)
        }}
      />
      <Input
        label="Name:"
        required={true}
        placeholder="Enter your name here..."
        {...form.getInputProps('name')}
      />
      <Input
        label="Mail:"
        required={true}
        placeholder="Enter your email address here..."
        {...form.getInputProps('username')}
      />
      <Textarea
        label="Bio"
        required={false}
        placeholder="Tell me a little bit about yourself..."
        rows={8}
        {...form.getInputProps('bio')}
      />
      <Button text="Submit" />
    </form>
  )
}

export default AccountProfile

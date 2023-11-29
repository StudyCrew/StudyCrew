'use client'

import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import { type IUser } from '@/lib/models/user'
import { updateUser } from '@/lib/actions/user.actions'
import { useForm } from '@mantine/form'
import { type formUser } from '@/lib/interface/formUser'
import { type AccountProfileProps } from '@/lib/interface/components/accountProfile'
import Button from '../ui/button'
import TextInput from '../ui/textinput'
import Textarea from '../ui/textarea'
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

	const handleImage = (e: File | string): void => {
		if (typeof e === 'string') return

		const fileReader = new FileReader()

		if (!e.type.includes('image')) return

		fileReader.onload = () => {
			const base64String = fileReader.result
			const stringResult = base64String?.toString() ?? ''

			setImageString(stringResult)
			console.log(stringResult)
			form.values.image = stringResult
		}

		fileReader.readAsDataURL(e)
	}

	return (
		<form
			onSubmit={form.onSubmit(async (values) => { await onSubmit(values) })}
			className="flex flex-col justify-start gap-10"
		>
			{form.values.image
				? (
					<Image
						src={imageString}
						alt="profile_icon"
						width={96}
						height={96}
						priority
						className="rounded-full object-contain"
					/>
				)
				: (
					<Image
						src="/assets/profile.svg"
						alt="profile_icon"
						width={24}
						height={24}
						className="object-contain"
					/>
				)}
			<FileInput
				label="Profile Picture"
				required={false}
				placeholder="Upload files"
				extensions='image/png,image/jpeg'
				clearable={true}
				cb={(file: File | null) => { handleImage(file ?? '') }}
			/>
			{/* <FileInput
				accept="image/*"
				placeholder="Add profile photo"
				className="account-form_image-input"
				onChange={(e) => { handleImage(e ?? '') }}
			/> */}
			<TextInput
				label="Name:"
				required={true}
				placeholder="Jordan..."
				val={form.values.name}
				cb={(value: string) => { form.values.name = value }}
			/>
			<TextInput
				label="Mail:"
				required={true}
				placeholder="Enter your email address here..."
				val={form.values.username}
				cb={(value: string) => { form.values.username = value }}
			/>
			<Textarea
				label="Bio"
				required={false}
				placeholder="Tell me a little bit about yourself..."
				minRows={8}
				val={form.values.bio}
				cb={(value: string) => { form.values.bio = value }}
			/>
			<Button text="Submit" />
		</form>
	)
}

export default AccountProfile

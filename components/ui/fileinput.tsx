import React, { useEffect, useState } from 'react'
import { FileInput as MantineFileInput } from '@mantine/core'
import { type FileInputProps } from '../../lib/interface/controls/fileinput'

export default function FileInput (props: FileInputProps): JSX.Element {
	const { label, required, extensions, clearable, placeholder, cb } = props
	const [value, setValue] = useState<File | null>(null)

	useEffect(() => {
		cb(value)
	}, [value])

	return <MantineFileInput
		value={value}
		onChange={setValue}
		radius="md"
		size="md"
		classNames={{
			input: 'text-primary-500'
		}}
		styles={{
			root: {
				borderRadius: '10px'
			}
		}}
		label={label}
		accept={extensions}
		clearable={clearable}
		required={required}
		placeholder={placeholder}
	/>
}

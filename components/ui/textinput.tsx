import React, { useEffect, useState } from 'react'
import { TextInput as MantineTextInput } from '@mantine/core'
import { type TextInputProps } from '../../lib/interface/controls/textinput'

export default function TextInput (props: TextInputProps): JSX.Element {
	const { label, required, placeholder, val, cb } = props
	const [value, setValue] = useState<string>(val)

	useEffect(() => {
		cb(value)
	}, [value])

	return (
		<MantineTextInput
			value={value}
			onChange={(event) => { setValue(event.currentTarget.value) }}
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
			required={required}
			placeholder={placeholder}
		/>
	)
}

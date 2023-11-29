import React, { useEffect, useState } from 'react'
import { Textarea as MantineTextArea } from '@mantine/core'
import { type TextAreaProps } from '../../lib/interface/controls/textarea'

export default function TextArea (props: TextAreaProps): JSX.Element {
	const { label, required, placeholder, minRows, val, cb } = props

	const [value, setValue] = useState<string>(val)

	useEffect(() => {
		cb(value)
	}, [value])

	return (
		<MantineTextArea
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
			minRows={minRows}
		/>
	)
}

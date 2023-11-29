import React from 'react'
import { Button as MantineButton } from '@mantine/core'

export default function Button (props: { text: string }): JSX.Element {
	return (
		<MantineButton
			variant="filled"
			radius="md"
			size="md"
			classNames={{
				root: 'bg-primary-500',
				label: 'font-semibold'
			}}
			type="submit"
			styles={{
				root: {
					borderRadius: '10px'
				}
			}}
		>
			{props.text}
		</MantineButton>
	)
}

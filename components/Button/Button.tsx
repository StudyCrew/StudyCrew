// Button.js

// Importing necessary libraries and styles
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css' // Styling for the Button component

/**
 * Button Component
 *
 * This component renders a button with customizable properties.
 * It supports different variants and sizes to accommodate various use cases.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.variant='primary'] - The variant of the button, e.g., 'outline' for an outlined
 * button.
 * @param {string} [props.size] - The size of the button, e.g., 'big' for a larger button.
 * @param {Function} [props.onClick] - The callback to be invoked when the button is clicked.
 *
 * @returns {React.Element} The rendered Button component.
 */
const Button = ({ children, variant, size, onClick }): React.Element => {
	// Base class for all buttons
	let className = 'button'

	// Modify class based on the variant and size props to apply different styles
	if (variant === 'outline') className += ' button-outline'
	if (size === 'big') className += ' button-big'
	if (size === 'small') className += ' button-small'
	if (size === 'big-outline') className += ' button-big-outline'

	// Render the button with the computed className and provided props
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

// Define the types of props for better documentation and validation
Button.propTypes = {
	children: PropTypes.node.isRequired, // Content of the button, can be text or another component
	variant: PropTypes.string, // Variant of the button, e.g., 'outline'
	size: PropTypes.string, // Size of the button, e.g., 'big'
	onClick: PropTypes.func // Callback for click event
}

// Define default values for optional props
Button.defaultProps = {
	variant: 'primary', // Default to primary button if no variant is provided
	onClick: () => {} // Default to no-op function if no onClick is provided
}

// Export the Button component for use in other files
export default Button

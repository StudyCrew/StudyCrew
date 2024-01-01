/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./lib/interface/controls/**/*.{ts,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			zIndex: {
				1: '1',
				200: '200'
			},
			rounded: {
				10: '10'
			},
			translate: {
				icon: '5%'
			},
			padding: {
				5.5: '22px'
			},
			colors: {
				gradient: {
					500: '#8338ec'
				},
				primary: {
					50: '#EEF6FF',
					100: '#D9EAFF',
					200: '#BCDBFF',
					300: '#8EC6FF',
					400: '#59A5FF',
					// Primary used for buttons, controls etc.
					500: '#3A86FF',
					// Hover applied to all primary controls
					600: '#4E92FF',
					// Active applied to all primary controls
					700: '#3376E0',
					800: '#173DB6',
					900: '#19388F',
					// Text applied to all standard text
					950: '#0C1B33'
				},
				secondary: {
					50: '#FFEFF3',
					100: '#FFE0EA',
					200: '#FFC6DA',
					300: '#FF97BB',
					400: '#FF5D98',
					500: '#FF247A',
					600: '#FF1A7D',
					// Text applied to all secondary text
					700: '#E00061',
					800: '#B40056',
					900: '#990250',
					950: '#570026'
				},
				'secondary-text': {
					// Background for site
					50: '#F6F7F9',
					100: '#EDEEF1',
					200: '#D7DBE0',
					300: '#B3BCC6',
					400: '#8A96A6',
					500: '#6B7A8C',
					600: '#566273',
					700: '#434C59',
					800: '#3D454F',
					900: '#363C44',
					950: '#24272D'
				},
				zircon: {
					50: '#F2F7FF',
					100: '#DBE8FE',
					200: '#BFDBFE',
					300: '#93BFFD',
					400: '#609DFA',
					500: '#3B78F6',
					600: '#2559EB',
					700: '#1D44D8',
					800: '#1E38AF',
					900: '#1E348A',
					950: '#172254'
				}
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			spacing: {
				'75vh': '75vh',
				'80vh': '80vh',
				'85vh': '85vh',
				'20vh': '20vh',
				'5%': '5%'
			},
			maxWidth: {
				'100vw': '100vw'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}

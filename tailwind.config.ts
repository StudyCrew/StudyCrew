/** @type {import('tailwindcss').Config} */

import tailwindCSSAnimate from 'tailwindcss-animate'

// TODO: Extract color codes as constants with descriptive names. Currently
//       only a few are commented and therefore documented. It is unclear what
///      the others are meant for.
const tailwindConfig = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [tailwindCSSAnimate],
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', 'ui-sans-serif'],
      serif: ['Rubik', 'ui-serif']
    },
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
        tooltipcolor: '#1D2939',
        gradient: {
          500: '#8338ec'
        },
        primary: {
          50: '#EEF6FF',
          100: '#D9EAFF',
          200: '#BCDBFF',
          300: '#8EC6FF',
          400: '#59A5FF',
          500: '#3A86FF', // Primary used for buttons, controls etc.
          600: '#4E92FF', // Hover applied to all primary controls
          700: '#3376E0', // Active applied to all primary controls
          800: '#173DB6',
          900: '#19388F',
          950: '#0C1B33' // Text applied to all standard text
        },
        secondary: {
          50: '#FFEFF3',
          100: '#FFE0EA',
          200: '#FFC6DA',
          300: '#FF97BB',
          400: '#FF5D98',
          500: '#FF247A',
          600: '#FF1A7D',
          700: '#E00061', // Text applied to all secondary text
          800: '#B40056',
          900: '#990250',
          950: '#570026'
        },
        'secondary-text': {
          50: '#F6F7F9', // Background for site
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
        },
        error: {
          50: '#FFEDED',
          100: '#FFE4E4',
          200: '#FFDBDB',
          300: '#FFBDBD',
          400: '#F89898',
          500: '#F06C6C',
          600: '#E83B3B',
          700: '#AC1C1C',
          800: '#6F0808',
          900: '#330000'
        },
        success: {
          50: '#F4FFF3',
          100: '#E5FFE2',
          200: '#D6FFD2',
          300: '#B8F8B2',
          400: '#98ED91',
          500: '#76E36D',
          600: '#51D845',
          700: '#3DA434',
          800: '#286F22',
          900: '#153B12'
        },
        alert: {
          50: '#FFFFFF',
          100: '#FFFFF5',
          200: '#FFFFEA',
          300: '#FFF8CF',
          400: '#FCEBAF',
          500: '#F5DD87',
          600: '#EECB51',
          700: '#B1911F',
          800: '#755B00',
          900: '#382C00'
        }
      },
      backgroundImage: {
        'arrow-bg': 'url(\'../../public/assets/arrow_bg.webp\')'
      },
      backgroundSize: {
        full: '100% 100%'
      },
      backgroundPosition: {
        top: 'top'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 }
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
  }
}

export default tailwindConfig

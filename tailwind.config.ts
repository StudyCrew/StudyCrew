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
      height:{
       200: '200px' 
      },
      zIndex: {
        1: '1',
        3:'3',
        5: '5',
        200: '200',
      },
      translate: {
        icon: '5%'
      },
      padding: {
        5.5: '22px'
      },
      boxShadow: {
        'faq-custom-light': '0 2px 1px rgba(128, 128, 128, 0.472)',
        'faq-custom-dark': '0 4px 2px rgba(128, 128, 128, 0.472)',
      },
      screens: {
        'sm': '600px',
      },

      // Update accordingly
      // fontFamily: {
      //   rubik: ['Rubik', 'sans-serif'],
      //   dmsans: ['DM Sans', 'sans-serif'],
      // },
      // fontSize: {
      //   'display-01': '40px',
      //   'heading1': '26px',
      //   'heading2': '24px',
      //   'heading3': '22px',
      //   'heading4': '20px',
      //   'body1': '18px',
      //   'heading5': '18px',
      //   'label-lg': '16px',
      //   'heading6': '16px',
      //   'overline': '14px',
      //   'label-md': '14px',
      //   'body-quotation': '14px',
      //   'body2': '14px',
      //   'button': '12px',
      //   'label-sm': '12px',
      //   'link': '10px',
      //   'label-xsm': '10px',
      //   'tiny': '10px',
      // },

      colors: {
        'white': '#fffbfb',
        'off white': '#fbfbfb',
        'off-white-2': '#f1f1f1',
        'green-outline': '#154704',
        'primary-blue': '#3a86ff',
        'background-light': '#eef4ff',

        'surface-gray': {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#e4e7ec',
          300: '#d0d5dd',
          400: '#98a2b3', 
          500: '#667085', 
          600: '#475467', 
          700: '#344054',
          800: '#1d2939',
          900: '#101828'
        },

        'system-alert':{
          'alert-50': '#ffffff',
          'alert-100': '#fffff5',
          'alert-200': '#ffffea',
          'alert-300': '#fff8cf',
          'alert-400': '#fcebaf',
          'alert-500': '#f5dd87', 
          'alert-600': '#eecb51', 
          'alert-700': '#b1911f', 
          'alert-800': '#755b00',
          'alert-900': '#382c00'
        },

        'system-error':{
          'error-50': '#ffeded',
          'error-100': '#ffe4e4',
          'error-200': '#ffdbdb',
          'error-300': '#ffbdbd',
          'error-400': '#f89898',
          'error-500': '#f06c6c', 
          'error-600': '#e83b3b', 
          'error-700': '#ac1c1c', 
          'error-800': '#6f0808',
          'error-900': '#330000'
        },

        'system-success':{
          'success-50': '#f4fff3',
          'success-100': '#e5ffe2',
          'success-200': '#d6ffd2',
          'success-300': '#b8f8b2',
          'success-400': '#98ed91',
          'success-500': '#76e36d', 
          'success-600': '#51d845', 
          'success-700': '#3da434', 
          'success-800': '#286f22',
          'success-900': '#153b12'
        },
        
        brand:"#3a86ff",
        brand_shade:"#3376e0",
        brand_tint:"#4e92ff",

        dim:"#243247",
        dim_shade:"",
        dim_tint:"",

        text:"#0c1b33",
        text_shade:"#0b182d",
        text_tint:"#243247",

        background:"#f2f7ff",
        background_shade:"#d5d9e0",
        background_tint:"#f3f8ff",
        header_background: "#f3f4f8",
        header_input_border: "#D0D5DD",
        header_input_background: "#F9FAFB",
        magnifying_glass_color:"#343330",
        light:"#666d79",
        
        gradient: {
          500: '#8338ec'
        },

        tooltipcolor: '#1D2939',

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
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif']
      },
      backgroundImage: {
        'arrow-bg': `url('../../public/assets/arrow_bg.webp')`
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
        '50':'50px',
        '100': '100px',
        '5%': '5%',
        '150px': '150px',
        '25px': '25px',
        '20px': '20px',
        '10px': '10px',
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

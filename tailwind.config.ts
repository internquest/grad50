import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': { 'min': '440px' },
        'xs': { 'min': '540px' },
        'x14': { 'min': '1610px' },
        'max-sm': { 'max': '600px' },
        'max-lg': { 'max': '1023px' },
      },
      animation: {
        'cursor-blink': 'typedjsBlink 0.7s infinite',
        circleFill: 'circleFill .3s linear',
        bouncelogo: 'bouncelogo .5s ease-in-out infinite ',
        'spin-slow': 'spin 5s linear infinite',
        'spin-circle-slow': 'spin 10s linear infinite',
        'scale-in-out': ' scaleInOut 3s ease-in-out infinite alternate',
        spin: 'spin 5s linear infinite',
        'number-scale': 'moveScale 2s linear '

      },
      keyframes: {

        moveScale: {
          '0%': {
            transform: 'matrix(1,0,0,1,4,0)'
          },
          '50%': {
            transform: 'matrix(1,0,0,1,4,-1362)'
          },
          '100%': {
            transform: 'matrix(1,0,0,1,4,-984)'
          }
        },
        typedjsBlink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
        ,
        spin: {
          '100%': {
            transform: 'rotate(1turn)'
          }
        }
        ,
        bouncelogo: {
          '0%': {
            transform: 'translateY(0)'
          },

          '50%': {
            transform: 'translateY(-5px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        circleFill: {
          '0%': {
            clipPath: 'circle(10%)'
          },
          '100%': {
            clipPath: 'circle(75%)'
          }
        }
      }
      ,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'generalsans-r': ['var(--font-generalsans-regular)'],
      'generalsans-b': ['var(--font-generalsans-bold)'],
      'generalsans-m': ['var(--font-generalsans-medium)'],
      'cabiet-r': ['var(--font-cabinet-regular)'],
      'cabiet-m': ['var(--font-cabinet-medium)'],
      'cabiet-black': ['var(--font-cabinet-black)'],
      'cabiet-b': ['var(--font-cabinet-bold)'],
      'WhyteInktrap': ['var(--font-whyteinktrap-bold)'],
      'WhyteInktrap-regular': ['var(--font-whyteinktrap-regular)'],
      'WhyteInktrap-medium': ['var(--font-whyteinktrap-medium)']
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        circleFill: 'circleFill .3s linear',
        bouncelogo: 'bouncelogo .5s ease-in-out infinite ',
        'spin-slow': 'spin 5s linear infinite',
        'spin-circle-slow': 'spin 10s linear infinite',
        'scale-in-out': ' scaleInOut 3s ease-in-out infinite alternate',
      },
      keyframes: {
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
      'generalsans-r': ['GeneralSans-Regular'],
      'generalsans-b': ['GeneralSans-Bold'],
      'generalsans-m': ['GeneralSans-Medium'],
      'cabiet-r': ['cabinet-regular'],
      'cabiet-black': ['cabinet-black'],
      'cabiet-b': ['cabinet-bold'],
      'WhyteInktrap': ['WhyteInktrap-Bold'],
      'WhyteInktrap-regular': ['WhyteInktrap-Reagular'],
      'WhyteInktrap-medium': ['WhyteInktrap-Medium']
    },
  },
  plugins: [],
}
export default config

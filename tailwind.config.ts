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
        'spin-slow': 'spin 10s linear infinite',
  'scale-in-out':' scaleInOut 3s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
     fontFamily: {
      'generalsans-r':['GeneralSans-Regular'],
      'generalsans-b':['GeneralSans-Bold'],
      'generalsans-m':['GeneralSans-Medium'],
      'cabiet-r':['cabinet-regular'],
      'cabiet-black':['cabinet-black'],
      'cabiet-b':['cabinet-bold'],
      'WhyteInktrap':['WhyteInktrap-Bold'],
      'WhyteInktrap-regular':['WhyteInktrap-Reagular'],
      'WhyteInktrap-medium':['WhyteInktrap-Medium']
    },
  },
  plugins: [],
}
export default config

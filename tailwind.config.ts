import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B3A6B',
          'navy-dark': '#0F2347',
          'navy-light': '#2A5298',
          red: '#B22234',
          'red-dark': '#8B1A27',
          'red-light': '#D42B3F',
          gold: '#C9A84C',
          'gold-light': '#E8C96A',
          'gold-dark': '#A8863A',
        },
        surface: {
          DEFAULT: '#F5F7FA',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

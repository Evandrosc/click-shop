import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      blue: {
        600: '#2A7AE4',
      },
      gray: {
        100: '#F5F5F5',
        400: '#A2A2A2',
        800: '#464646',
      },
    },
  },
  plugins: [],
}
export default config

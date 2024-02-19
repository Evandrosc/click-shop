import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mob: '400px',
      },
      colors: {
        blue: {
          50: '#EAF2FD',
          600: '#2A7AE4',
        },
        gray: {
          100: '#F5F5F5',
          300: '#C8C8C8',
          400: '#A2A2A2',
          800: '#464646',
        },
      },
      padding: {
        mobile: '1rem',
        tablet: '2rem',
        desktop: '9.5rem',
      },
      backgroundImage: {
        'promocional-img': `url('/promocional/banner.webp')`,
        'promocional-img-medio': `url('/promocional/bannerMedio.webp')`,
        'promocional-img-pequeno': `url('/promocional/bannerPequeno.webp')`,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.botao-azul': {
          border: '2px solid #2A7AE4',
          backgroundColor: '#2A7AE4',
          fontWeight: '600',
          color: '#fff',
          transition: 'all 300ms',

          '&:hover': {
            backgroundColor: '#fff',
            color: '#2A7AE4',
          },
        },
        '.largura-maxima': {
          padding: '0 1rem',
          maxWidth: '1168px',
          margin: '0 auto',

          '@media (min-width: 768px)': {
            padding: '0 2rem',
          },
        },
        '.grid-areas-footer': {
          gridTemplateColumns: '171px 1fr',
          maxWidth: '1168px',
          gridTemplateAreas: '"logo form" "nav form"',

          '@media (min-width: 1024px)': {
            gridTemplateColumns: '176px 176px 1fr',
            gridTemplateAreas: '"logo nav form" "logo nav form"',
          },
        },
      })
    }),
  ],
}
export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        ink: '#221F1A',
        moss: '#5B6B4F',
        'moss-dark': '#455038',
        clay: '#B08A5C',
        line: '#E4DCCB',
      },
      fontFamily: {
        serif: ['var(--font-newsreader)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

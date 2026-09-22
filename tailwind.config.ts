import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F1F4F7',
        ink: '#161B22',
        moss: '#2C6E8E',
        'moss-dark': '#204E64',
        clay: '#7D8B99',
        line: '#DCE3E9',
      },
      fontFamily: {
        serif: ['var(--font-heading)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

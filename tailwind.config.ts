import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f4f1',
        foreground: '#111111',
        muted: '#7a7a7a',
        accent: '#1f4b42',
        surface: '#eceae4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 9rem)',
      },
      maxWidth: {
        content: '88rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};

export default config;

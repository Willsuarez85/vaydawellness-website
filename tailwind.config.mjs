/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest':  '#2D4A35',
        'cream':   '#FBF9F2',
        'sage':    '#8DA491',
        'beige':   '#D7D5C6',
        'charcoal':'#2D3436',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans':  ['Inter', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['56px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2':      ['42px', { lineHeight: '1.2' }],
        'h3':      ['28px', { lineHeight: '1.35' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body':    ['17px', { lineHeight: '1.7' }],
        'sm':      ['14px', { lineHeight: '1.5', letterSpacing: '0.03em' }],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}

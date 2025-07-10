/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sealiah: {
          sand: '#F5EDE4',
          ivory: '#FFFDF9',
          eucalyptus: '#5A6B52', // Improved contrast ratio
          amber: '#8B7355', // Improved contrast ratio
          cream: '#FDF9F3'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      screens: {
        'motion-safe': { 'raw': '(prefers-reduced-motion: no-preference)' },
        'motion-reduce': { 'raw': '(prefers-reduced-motion: reduce)' }
      }
    },
  },
  plugins: [],
};
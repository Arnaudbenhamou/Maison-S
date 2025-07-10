/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sealiah: {
          sand: '#F5EDE4',
          ivory: '#FFFDF9',
          eucalyptus: '#8A8F86',
          amber: '#C2B4A6',
          cream: '#FDF9F3'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi'],
      },
      colors: {
        primary: {
          100: '#E6E6FA',
          200: '#ABACDB',
          300: '#8182C9',
          400: '#5858B7',
          500: '#2E2FA5',
          600: '#040593',
          700: '#03047A',
          800: '#030362',
          900: '#020249',
          1000: '#010231',
        },
        secondary: {
          100: '#F1EACE',
          200: '#E8DCAD',
          300: '#DCCA83',
          400: '#D0B95A',
          500: '#B99608',
          600: '#9A7D07',
          700: '#7B6405',
          800: '#5C4B04',
          900: '#3E3203',
          1000: '#251E02',
        },
        // Use for text.
        dark: {
          100: '#CCCDDB',
          200: '#ABABC3',
          300: '#8081A4',
          400: '#565786',
          500: '#02034A',
          600: '#02023E',
          700: '#010231',
          800: '#010125',
          900: '#010119',
          1000: '#00010F',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['\"Segoe UI\"', 'system-ui', 'sans-serif']
      },
      colors: {
        autoflow: {
          50: '#eaf7ff',
          100: '#d4edff',
          200: '#a8daff',
          300: '#7cc8ff',
          400: '#4fb5ff',
          500: '#23a3ff',
          600: '#0a8ae6',
          700: '#066ab4',
          800: '#034a82',
          900: '#012a50'
        }
      }
    }
  },
  plugins: []
};

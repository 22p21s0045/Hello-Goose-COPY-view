/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      header: '64px',
      'team-name': '48px',
      'paragraph-header': '24px',
      paragraph: '18px',
      small: '16px',
    },
    extend: {
      fontFamily: {
        itim: ['Itim', 'cursive'],
        cherry: ['Cherry Bomb One', 'cursive'],
      },
      backgroundColor: {
        'custom-blue': '#6479BC',
      },
      gradientColorStops: {
        'custom-pink': '#F6D5E6',
        'custom-pink-transparent': 'rgba(250, 128, 179, 0.00)',
      },
      colors: {
        primary: {
          50: '#fcf1f7',
          100: '#fbeaf3',
          200: '#f6d5e6',
          300: '#e376af',
          400: '#cc6a9e',
          500: '#b65e8c',
          600: '#aa5983',
          700: '#884769',
          800: '#66354f',
          900: '#4f293d',
        },
        secondary: {
          50: '#f0f2f8',
          100: '#e8ebf5',
          200: '#cfd5ea',
          300: '#6479bc',
          400: '#5a6da9',
          500: '#506196',
          600: '#4b5b8d',
          700: '#3c4971',
          800: '#2d3655',
          900: '#232a42',
        },
      },
    },
  },
  plugins: [],
};

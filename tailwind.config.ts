import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '2.25': '0.6rem',
        '7.1': '1.8rem',
        '15.25': '3.8125rem',
        '24.25': '6.0625rem',
        '27': '6.75rem',
        '61.5': '15.3125rem',
      },
      colors: {
        'black-basic': '#242424',
        'green-basic': '#8FFD9F',
        'green-back': '#51E739',
        'blue-basic': '#0FCEF4',
        'blue-back-100': '#C7E8FF',
        'blue-back': '#539BCB',
      }
    },
  },
  plugins: [],
} satisfies Config;

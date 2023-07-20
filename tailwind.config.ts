import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '2.25': '0.6rem',
        '7.1': '1.8rem',
        '15.25': '3.8125rem',
        '16.75': '4.1875rem',
        '18.1': '4.8rem',
        '24.25': '6.0625rem',
        '27': '6.75rem',
        '46': '11.5rem',
        '61.5': '15.3125rem',
        '62.5': '16.3125rem',
        '83': '20.75rem',
        '92': '23rem',
        '164.5': '41.125rem',
      },
      colors: {
        'black-basic': '#242424',
        'green-basic': '#8FFD9F',
        'green-back': '#51E739',
        'green-head': '#2DBF16',
        'blue-basic': '#0FCEF4',
        'blue-back-100': '#C7E8FF',
        'blue-back': '#539BCB',
        'blue-head': '#18A0FB',
      }
    },
  },
  plugins: [],
} satisfies Config;

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
        '39.25': '9.8125rem',
        '46': '11.5rem',
        '61.5': '15.3125rem',
        '62.5': '16.3125rem',
        '83': '20.75rem',
        '92': '23rem',
        '164.5': '41.125rem',
      },
      colors: {
        'slate-250': 'rgba(227, 227, 227, 0.5)',
        'orange-main': '#FBC705',
        'orange-sub': '#F9BD39',
        'white-transparent': 'rgba(255, 255, 255, 0.0)',
        'yellow-text': '#FFC605',
        'orange-text': '#F28801',
        'gray-text': '#6D6D6D',
        'gray-sub': '#C2C2C2',
        'black-text': '#1D1D1D',
        'black-sub': '#292929',
        'gray-foot': '#F6F6F6',
      },
      fontFamily: {
        'monts': 'Montserrat',
      },
      borderRadius: {
        'bl': '2.84375rem',
        '4rem': '4rem',
      },
      letterSpacing: {
        'larger': '0.535rem',
      },
      backgroundImage: () => ({
        'gradient-radial': 'radial-gradient(ellipse at center, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
      }),
      boxShadow: {
        'custom-light': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin.js';
import { responsiveLayout } from './tailwindCustomPlugins';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'lg': '1200px',
    },
    colors: {
      primary: '#313237',
      secondary: '#89939A',
      icons: '#B4BDC3',
      elements: '#E2E6E9',
      hoverBg: '#FAFBFC',
      green: '#27AE60',
      red: '#EB5757',
      white: '#ffffff',
      'dark-accent': '#905BFF',
      'dark-accent-hover': '#A378FF',
      'dark-white': '#F1F2F9',
      'dark-secondary': '#75767F',
      'dark-icons': '#4A4D58',
      'dark-elements': '#3B3E4A',
      'dark-surface-1': '#161827',
      'dark-surface-2': '#323542',
      'dark-black': '#0F1121',
    },
    extend: {
      screens: {
        tablet: '640px',
        tabletMax: '1020px',
        desktop: '1200px',
      },
      viewport: {
        mobile: 320,
        tablet: 1199,
        desktop: 1200,
      },
      flex: {
        header: '0 0 auto',
        main: '1 0 auto',
        footer: '0 0 auto',
      },
    },
  },
  plugins: [plugin(responsiveLayout())],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#4a4a4a',
        light: '#f1f1f1',
      },
      fontFamily: {
        silka: ['Silka', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', '@tailwindcss/aspect-ratio'],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        transitionDuration: {
          '300': '300ms', // You can add your custom duration here
        },
      },
    },
    plugins: [],
  };
  
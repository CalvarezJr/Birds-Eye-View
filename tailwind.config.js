/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'light-gray': '#D9D9D9',
        'bright-red': '#FF4500',
        // or
        'sky-blue': '#4A90E2',
        'cloud-white': '#F5F5F5',
        'jet-black': '#232323',
        'yellow-ochre': '#F5A623'
      }
  
    },
    
  },
  plugins: [],
}
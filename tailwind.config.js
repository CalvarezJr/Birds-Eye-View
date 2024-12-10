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
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeBackground: {
          '0%': { backgroundColor: '#00008b' }, // Dark Blue
          '50%': { backgroundColor: '#8a2be2' }, // Purple
          '100%': { backgroundColor: '#00008b' }, // Back to Dark Blue
        },
        gradientRotate: {
          '0%': { backgroundPosition: '20% 50%' },
          '50%': { backgroundPosition: '80% 50%' },
          '100%': { backgroundPosition: '20% 50%' },
        },
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '50%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '50.1%, 100%': { opacity: 0 },
        },
    },
    animation: {
      'fade-in': 'fadeIn .1s ease-out',
      'slide-in-top': 'slideInTop 2s ease-out',
      'slide-in-bottom': 'slideInBottom 2s ease-out',
      'slide-in-left': 'slideInLeft 2s ease-out',
      'slide-in-right': 'slideInRight 2s ease-out',
      'fade-bg': 'fadeBackground 6s infinite',
      'gradient-rotate': 'gradientRotate 6s ease infinite',
      'typing': 'typing 3s steps(100, end) forwards',
      'blink': 'blink 1s step-end infinite',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky:  { pale:'#e8f6fc', light:'#c8eaf5', DEFAULT:'#a8d8ea', dark:'#7ec4df' },
        rose: { pale:'#fef0f4', light:'#fcd9e4', DEFAULT:'#f4b8c8', dark:'#e89ab0' },
        gold: { pale:'#fdf5e4', light:'#e8c96a', DEFAULT:'#c9a84c', dark:'#a8882e' },
        cream: '#fdf8f0',
      },
      fontFamily: {
        display: ['"Playfair Display"','Georgia','serif'],
        body:    ['"Cormorant Garamond"','Georgia','serif'],
        ui:      ['"Lato"','sans-serif'],
      },
      boxShadow: {
        soft:  '0 4px 24px rgba(168,216,234,0.25)',
        gold:  '0 4px 20px rgba(201,168,76,0.3)',
        card:  '0 8px 40px rgba(168,216,234,0.2)',
        float: '0 20px 60px rgba(168,216,234,0.35)',
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'fade-up':    'fadeUp 0.7s ease forwards',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
        fadeUp:    { from:{ opacity:'0', transform:'translateY(24px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        pulseGold: { '0%,100%':{ boxShadow:'0 0 0 0 rgba(201,168,76,0.3)' }, '50%':{ boxShadow:'0 0 0 12px rgba(201,168,76,0)' } },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },
    extend: {
      fontFamily: {
        heading: ['Cairo', 'sans-serif'],
        sans: ['Tajawal', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        'luxury-black': '#1A1A1A',
        'gold-matte': '#C5A059',
        luxury: {
          black: '#1A1A1A',      // Charcoal Black
          deep: '#121212',       // Deep Charcoal
          rich: '#0D0D0D',       // Rich Black
          elevated: '#242424',   // Elevated Surface
        },
        gold: {
          matte: '#C5A059',      // Matte Gold
          primary: '#C5A059',
          highlight: '#E2C68E',  // Champagne
          bronze: '#A67C37',     // Bronze
          deep: '#85642E',       // Deep Gold
        },
        text: {
          primary: '#F5F5F5',    // Cream White
          secondary: 'rgba(245, 245, 245, 0.8)',
          muted: 'rgba(245, 245, 245, 0.6)',
        }
      },
      backgroundImage: {
        'gold-matte': 'linear-gradient(135deg, #C5A059 0%, #E2C68E 50%, #A67C37 100%)',
        'gold-shine': 'linear-gradient(90deg, #C5A059 0%, #E2C68E 40%, #A67C37 80%, #C5A059 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #121212 100%)',
      },
      boxShadow: {
        'luxury-card': '0 10px 40px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 30px rgba(197, 160, 89, 0.3)',
      },
      animation: {
        'shine': 'shine 2s infinite',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [],
};

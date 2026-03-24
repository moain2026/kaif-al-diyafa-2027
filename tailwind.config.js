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
        luxury: {
          black: '#121212',      // Baseline depth
          deep: '#0A0A0A',       // High-contrast sections
          rich: '#050505',       // Maximum contrast
          elevated: '#1A1A1A',   // Elevated surfaces
          surface: '#242424',    // Card backgrounds
        },
        gold: {
          primary: '#D4AF37',    // Primary Gold
          highlight: '#F9E488',  // Champagne Highlight
          bronze: '#B8860B',     // Dark Goldenrod
          aged: '#8B7D50',       // Aged Brass
          deep: '#6B4E16',       // Deep Bronze Shadow
          metallic: '#D3AF37',
          chinese: '#CD9900',
          coin: '#A57D02',
        },
        text: {
          primary: '#F5F5DC',    // Cream
          secondary: '#E0E0E0',
          muted: '#A0A0A0',
        }
      },
      backgroundImage: {
        'gold-shine': 'linear-gradient(90deg, #D4AF37 0%, #F9E488 50%, #B8860B 100%)',
        'gold-button': 'linear-gradient(135deg, #D4AF37 0%, #F9E488 50%, #D4AF37 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #121212 0%, #0A0A0A 100%)',
      },
      boxShadow: {
        'luxury-card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'luxury-card-hover': '0 12px 48px rgba(212, 175, 55, 0.2)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};

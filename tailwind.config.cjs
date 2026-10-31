/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5500',
          'orange-hover': '#E04B00',
          blue: '#0066FF',
          'blue-hover': '#0052CC',
          navy: '#031B3A',
          'navy-light': '#08254D',
          'slate-bg': '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 4px 20px -2px rgba(18, 25, 38, 0.05)',
        'ambient-hover': '0 12px 32px -4px rgba(3, 27, 58, 0.09)',
        'cta-orange': '0 4px 14px 0 rgba(255, 85, 0, 0.28)',
        'cta-blue': '0 4px 14px 0 rgba(0, 102, 255, 0.25)',
      },
      borderRadius: {
        'card': '12px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      }
    },
  },
  plugins: [],
}

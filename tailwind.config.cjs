/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081426',
          900: '#0F2342',
          800: '#162F56',
          700: '#1E3E6F',
        },
        royal: {
          500: '#0B72E7',
          400: '#38BDF8',
          600: '#095ec0',
        },
        amber: {
          400: '#F59E0B',
          500: '#F97316',
        },
        surface: {
          50: '#F4F7FB',
          100: '#E8EEF5',
        },
        brand: {
          orange: '#FF5500',
          'orange-hover': '#E04B00',
          blue: '#0066FF',
          'blue-hover': '#0052CC',
          navy: '#081426',
          'navy-deep': '#0F2342',
          'navy-light': '#162F56',
          'slate-bg': '#F4F7FB',
        }
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'ambient': '0 4px 20px -2px rgba(18, 25, 38, 0.05)',
        'ambient-hover': '0 12px 32px -4px rgba(3, 27, 58, 0.09)',
        'bento': '0 10px 30px -5px rgba(8, 20, 38, 0.08)',
        'cta-orange': '0 4px 14px 0 rgba(249, 115, 22, 0.28)',
        'cta-blue': '0 4px 14px 0 rgba(11, 114, 231, 0.25)',
      },
      borderRadius: {
        'card': '16px',
        '2card': '20px',
        '3card': '24px',
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

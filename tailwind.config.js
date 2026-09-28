/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#040711',
        surface: {
          DEFAULT: '#0b1120',
          elevated: '#11182c',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(56, 189, 248, 0.15)',
        },
        primary: {
          DEFAULT: '#0066ff',
          glow: '#0052cc',
          light: '#3b82f6',
        },
        cyan: {
          DEFAULT: '#00e5ff',
          glow: '#00b4d8',
          accent: '#38bdf8',
        },
        emerald: {
          glow: '#10b981',
        },
        salesforce: {
          DEFAULT: '#00a1e0',
          dark: '#032d60',
        },
        leetcode: {
          DEFAULT: '#ffa116',
          dark: '#262626',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(0, 102, 255, 0.12) 1px, transparent 1px)",
        'tech-lines': "linear-gradient(to right, rgba(0, 102, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 102, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 102, 255, 0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(0, 229, 255, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}

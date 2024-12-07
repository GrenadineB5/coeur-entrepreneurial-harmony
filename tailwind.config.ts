import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        retro: {
          purple: "#6B1FB1",
          pink: "#FF1E8A",
          blue: "#00E1FF",
          yellow: "#FFD700",
          orange: "#FF8C00",
          black: "#1A0F2E",
        },
      },
      backgroundImage: {
        'retro-grid': "linear-gradient(to right, rgba(255,30,138,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,30,138,0.1) 1px, transparent 1px)",
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: "0",
            transform: "translateY(20px)",
          },
          '100%': {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'fade-in': {
          '0%': {
            opacity: "0",
          },
          '100%': {
            opacity: "1",
          },
        },
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #FF1E8A, 0 0 82px #FF1E8A, 0 0 92px #FF1E8A, 0 0 102px #FF1E8A, 0 0 151px #FF1E8A'
          },
          '50%': { 
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #FF1E8A, 0 0 73px #FF1E8A, 0 0 80px #FF1E8A, 0 0 94px #FF1E8A, 0 0 140px #FF1E8A'
          }
        }
      },
      animation: {
        'fade-up': "fade-up 0.5s ease-out",
        'fade-in': "fade-in 0.3s ease-out",
        'neon': 'neon-pulse 1.5s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
          pink: "#FF6B6B",
          blue: "#4A90E2",
          yellow: "#F5A623",
          orange: "#E67E22",
          black: "#1A0F2E",
          mint: "#98D8D0",
          cream: "#FFF6E9",
          softPink: "#FFD4E5",
          darkPink: "#FF4D8D",
        },
      },
      backgroundImage: {
        'retro-grid': "linear-gradient(to right, rgba(107,31,177,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,31,177,0.1) 1px, transparent 1px)",
        'retro-dots': "radial-gradient(rgba(255,77,141,0.15) 1px, transparent 1px)",
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
      },
      animation: {
        'fade-up': "fade-up 0.5s ease-out",
        'fade-in': "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
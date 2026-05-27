/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        paper: {
          50: "#FAF9F6",
          100: "#F5F4EF",
          200: "#E8E5DA",
        },
        ink: {
          900: "#1A1A1A",
          800: "#2C2C2C",
          700: "#3D3D3D",
          600: "#555555",
          500: "#666666",
        },
        accent: {
          600: "#8B6914",
          500: "#A67C00",
          100: "#F5E6C8",
          50: "#FDF7E7",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "'Noto Serif SC'", "serif"],
        serif: ["'Noto Serif SC'", "'Source Serif Pro'", "serif"],
        sans: ["'Noto Sans SC'", "'Inter'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "720px",
          },
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both"
      }
    }
  },
  plugins: []
};

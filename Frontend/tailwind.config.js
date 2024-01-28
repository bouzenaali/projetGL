/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/app/globals.css", "./src/**/*.{js,jsx}", "./shared/**/*.{js,jsx}"],
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
        "pink-brand": "#EA163C",
        "pink-secondary": "#F3C0C9CC",
        "grey-scale1": "#1C1F1E",
        "grey-scale2": "#A7A6A5",
        "title-color": "#1E1E1E",
        "small-text": "#7A777B",
        "review-blue": "#061C3D",
        "text-p": "#7A777B",
        "link-grey": "#CDCDCD",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        8: "8px",
        16: "16px",
      },
      backgroundImage: (theme) => ({
        img: "url('/main_image.jpg')",
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
};

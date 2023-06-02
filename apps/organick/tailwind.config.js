/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      primary: "var(--primary)",
      "primary-100": "var(--primary-100)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      accent: "var(--accent)",
    },
    backgroundColor: {
      primary: "var(--bg-primary)",
      "primary-100": "var(--bg-primary-100)",
      "primary-200": "var(--bg-primary-200)",
      secondary: "var(--bg-secondary)",
      "secondary-100": "var(--bg-secondary-100)",
    },
    borderColor: {
      primary: "var(--border-primary)",
    },
    fontFamily: {
      sans: "var(--font-sans)",
    },
  },
  plugins: [],
};

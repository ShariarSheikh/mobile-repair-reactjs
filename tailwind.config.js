const { screens } = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        "2xl": '1366px',
        "3xl": '1440px',
        "4xl": '1536px',
        "5xl": '1920px',
      },
      width: {
        '2xl': '1366px',
        '3xl': '1440px',
        '4xl': '1536px',
        '5xl': '1920px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
      //...
      scale: ["active", "group-hover"],
      //...
      opacity: ["disabled"],
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
  ],
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled', // Custom variant
    'disabled',
  ],
};

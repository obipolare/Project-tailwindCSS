module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        blackcool: "#1a1a2e",
      },
      fontFamily: {
        itim: ["Itim", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "your-name": "url('img/name.jpg')",
      }),
    },
  },
  variants: {
    appearance: ["responsive"],
    // ...
    borderColor: ["responsive", "hover", "focus"],
    // ...
    outline: ["responsive", "focus"],
    // ...
    zIndex: ["responsive"],
  },
  plugins: [],
};

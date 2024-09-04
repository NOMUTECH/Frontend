// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   content: [],
//   theme: {
//     extend: {
//       colors: {
//         slateblue: "#6A5ACD",
//         seagreen: "#2E8B57",
//         "rgba-255": "rgba(255, 255, 255, 0.1)",
//       },
//       height: {
//         450: "450px",
//       },
//       width: {
//         420: "420px",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateblue: "#6A5ACD",
        seagreen: "#2E8B57",
        "rgba-255": "rgba(255, 255, 255, 0.1)",
        "blue-100": "#c3daf9",
        "blue-200": "#3e76c0",
        "blue-300": "#044295",
        "blue-400": "#152e4d",
        "lime-green": "#7ed957",
      },
      height: {
        450: "450px",
        "screen-minus-72": "calc(100vh - 72px)",
      },
      width: {
        420: "420px",
      },
    },
  },
  plugins: [],
};

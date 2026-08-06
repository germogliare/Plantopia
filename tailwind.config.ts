import type { Config } from "tailwindcss";


const config: Config = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    extend: {

      colors: {

        plantGreen: "#5E8C61",

        plantDark: "#2F5D50",

        plantBackground: "#F8F6F1",

      },

    },

  },

  plugins: [],

};


export default config;

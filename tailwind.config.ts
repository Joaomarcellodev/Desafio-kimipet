// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-orange': "url('/img/logo-kimipet-text-orange.png')",
        'logo-hero': "url('/img/dog-image-3.png')",
      },
      colors: {
        orange: {
          DEFAULT: '#fc8434',
          dark: '#d9732e',
          darker: '#b66228',
        },
        purple: {
          DEFAULT: '#640c8c',
          dark: '#500966',
          darker: '#430855',
          sun: "#ecd4fc",
        },
        white: "#FFFFFF",
        white2: "#f4f4f4",
        white3: "#f4ecfc",
        red: "#e40404",
        love:"#A60101",
      },
    },
  },
  plugins: [],
};

export default config;

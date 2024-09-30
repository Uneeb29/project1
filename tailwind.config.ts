import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        'alva-light-blue': '#0393D6',
        'alva-red' : '#FA481D',
      },
      fontFamily: {
        poppins: ["var(--poppins-default)"],
      },
    },
  },
  plugins: [],
};
export default config;

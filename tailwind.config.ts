import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#F2F2F2",
        purple: "#BF40BF",
        grayBackground: "#F7F7F7",
        green: "#90EE90",
        black: "#000",
        activeButton: "#323832",
        primary: "#f4c64a",
        white: "white"
      },
      borderRadius: {
        DEFAULT: "21px",
        sm: "8px"
      },
    },
  },
  plugins: [],
}
export default config

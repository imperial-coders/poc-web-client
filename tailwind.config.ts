import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        white: "#FFF",
        black: "#212121",
        primary: {
          DEFAULT: "#121212",
          cta: "#212121",
          900: "#F3F3F3",
          800: "#E7E7E7",
          700: "#B7B7B7",
          600: "#707070",
          500: "#121212",
          400: "#0F0D0D",
          300: "#0C0909", // muted
          200: "#0A0506",
          100: "#080305",
        },
        success: {
          DEFAULT: "#44C948",
          100: "#E5FCDA",
          200: "#C7F9B7",
          300: "#9DEE8F",
          400: "#76DE70",
          500: "#44C948",
          600: "#31AC40",
          700: "#229039",
          800: "#157431",
          900: "#0D602C",
        },
        info: {
          DEFAULT: "#00ACD3",
          100: "#CAFCF6",
          200: "#96FAF6",
          300: "#60ECF1",
          400: "#39D1E4",
          500: "#00ACD3",
          600: "#0086B5",
          700: "#006497",
          800: "#00487A",
          900: "#003465",
        },
        warning: {
          DEFAULT: "#EF8504",
          100: "#FEF0CC",
          200: "#FDDE99",
          300: "#FAC566",
          400: "#F5AC40",
          500: "#EF8504",
          600: "#CD6802",
          700: "#AC4F02",
          800: "#8A3901",
          900: "#722A00",
        },
        danger: {
          DEFAULT: "#FF3D3D",
          100: "#FFE5D8",
          200: "#FFC5B1",
          300: "#FF9E8A",
          400: "#FF7A6D",
          500: "#FF3D3D",
          600: "#DB2C3B",
          700: "#B71E39",
          800: "#931334",
          900: "#7A0B32",
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
         'myColor': '#0c9157',
         'myColor_dark': '#045431',
         'second_color': '#c48210',
         'background_color': '#d7edaf',
         'custom-green': 'rgb(138, 191, 117)',
         'text-myColor': 'rgb(11, 31, 3)',
      },
      boxShadow: {
        'custom-xl': '0 25px 50px -12px rgba(126, 242, 145, 0.5)', // custom shadow
      },
    },
  },
  plugins: [],
};
export default config;

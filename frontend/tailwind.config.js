/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#E59C36",
        primary_color_light: "#FCDCA9",
        secondary_color: "#454449",
        primary_red: "#FA0F0F",
        primary_green: "#028943",
        primary_yellow: "#FFA100",
        primary_blue: "#00AEFF",
        primary_red_light: "#FFBFBF",
        primary_green_light: "#BBFCD4",
        primary_yellow_light: "#FAFFC2",
        primary_blue_light: "#C2DCFF",
        faded_yellow: "#FFF0D9"
      },
    },
  },
  plugins: [],
}


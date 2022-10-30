/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-border-gradient-radius"), require("daisyui")],
  daisyui: {
    styled: true,
    // themes: true,
    themes: [
      {
        // 覆盖主题，使用lofi主题
        lofi: {
          ...require("daisyui/src/colors/themes")["[data-theme=lofi]"],
          // // 主色蓝色
          // primary: "#1E9BD4",
          // // 按钮的黑色
          // secondary: "#002029",
          // // #1DFBD3 绿色
          // "secondary-content": "#1DFBD3",
          // // 中性色，灰色按钮
          // neutral: "#B5B5B5",
          // "neutral-content": "#FFFFFF",
          // // 背景色
          // "base-200": "#F5F5F5",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
};

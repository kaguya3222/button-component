import { globalCss } from "@stitches/react";

// TODO: load fonts

const globalStyles = globalCss({
  "@font-face": {
    fontFamily: "Noto Sans JP",
    fontStyle: "normal",
    fontWeight: 400,
    src: `
      url('../public/fonts/noto-sans-jp-v42-latin-regular.eot'); /* IE9 Compat Modes */
      url('../public/fonts/noto-sans-jp-v42-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('../public/fonts/noto-sans-jp-v42-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
      url('../public/fonts/noto-sans-jp-v42-latin-regular.woff') format('woff'), /* Modern Browsers */
      url('../public/fonts/noto-sans-jp-v42-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
      url('../public/fonts/noto-sans-jp-v42-latin-regular.svg#NotoSansJP') format('svg'); /* Legacy iOS */
    `,
  },
  "*": {
    background: "red",
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    globalStyles();
    return <Story />;
  },
];

import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Noto Sans JP",
      fontStyle: "normal",
      fontWeight: 400,
      src: `
        url('./fonts/noto-sans-jp-v42-latin-regular.woff2') format('woff2'),
        url('./fonts/noto-sans-jp-v42-latin-regular.woff') format('woff');
      `,
    },
    {
      fontFamily: "Noto Sans JP",
      fontStyle: "normal",
      fontWeight: 500,
      src: `
        url('./fonts/noto-sans-jp-v42-latin-500.woff2') format('woff2'),
        url('./fonts/noto-sans-jp-v42-latin-500.woff') format('woff');
      `,
    },
  ],
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

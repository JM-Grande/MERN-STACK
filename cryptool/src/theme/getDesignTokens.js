import "../index.css";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      background: {
        default: "#001e3c",
        paper: "#001e3c",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: "#fffff",
            secondary: "#fffff",
          }
        : {
            // dark mode
            primary: "#9e9e9e",
            secondary: "#ffff",
          }),
    },
  },
});

export default getDesignTokens;

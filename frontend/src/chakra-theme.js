import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  breakpoints: {
    base: "0px",
    sm: "480px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
  },
});

export default theme;

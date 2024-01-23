import { extendTheme } from "@chakra-ui/react";
import "@fontsource/amatic-sc";
import "@fontsource/roboto";
const theme = extendTheme({
  fonts: {
    heading: `'Amatic SC', sans-serif`,
    body: `'Roboto', sans-serif;`,
  },
});

export default theme;

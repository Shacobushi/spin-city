import React from "react";
import ReactDOMServer from "react-dom/server";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import App from "./App";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  );
  return { html };
}

import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </ThemeProvider>
  );
}

export default App;

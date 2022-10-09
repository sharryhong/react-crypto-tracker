import React from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { lightTheme, darkTheme } from "./styles/theme";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </ThemeProvider>
  );
}

export default App;

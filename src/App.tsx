import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import GlobalStyle from "./styles/globalStyeld/GlobalStyled";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeState } from "./recoil/atom";
import { lightTheme, darkTheme } from "./styles/globalStyeld/Theme";
import { useEffect } from "react";
import { loginState } from "./recoil/atom";

const App = () => {
  const [ theme ] = useRecoilState(themeState);
  const appliedTheme = theme === "light" ? lightTheme : darkTheme;
  const setLogin = useSetRecoilState(loginState);

  useEffect(() => {
    //로그인 정보 확인
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken) setLogin(true)
    
  }, [setLogin]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;

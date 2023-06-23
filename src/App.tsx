import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import GlobalStyle from "./styles/globalStyeld/GlobalStyled";
import { useRecoilState } from "recoil";
import { themeState } from "./recoil/atom";
import { lightTheme, darkTheme } from "./styles/globalStyeld/Theme";

const App = () => {
  const [theme] = useRecoilState(themeState);
  const appliedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;

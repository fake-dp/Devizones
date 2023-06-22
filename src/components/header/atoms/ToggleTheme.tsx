import { ThemeIconWrapper } from "../../../styles/headerStyled/HeaderStyled";
import { useRecoilState } from 'recoil';
import { themeState } from "../../../recoil/atom";
import { StyledSun, StyledMoon } from "../../../styles/headerStyled/HeaderStyled";

const ToggleTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeIconWrapper onClick={toggleTheme}>
      {theme === 'light'?<StyledSun />:<StyledMoon />}
    </ThemeIconWrapper>
  )
};

export default ToggleTheme
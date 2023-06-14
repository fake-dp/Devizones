import LoginButton from "../atoms/LoginButton";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import { Link } from "react-router-dom";
import * as S from "../../../styles/headerStyled/HeaderStyled";
import ToggleTheme from "../atoms/ToggleTheme";

type HeaderOrgProps = {
  openModal: () => void;
};

const HeaderOrg = ({ openModal }: HeaderOrgProps) => {
  return (
    <S.HeaderContainer>
      <Link to="/">
        {" "}
        <Logo />
      </Link>

      <S.HeaderRight>
        <Link to="/search">
          {" "}
          <SearchBar />
        </Link>
        <ToggleTheme />
        <LoginButton openModal={openModal} />
      </S.HeaderRight>
    </S.HeaderContainer>
  );
};

export default HeaderOrg;

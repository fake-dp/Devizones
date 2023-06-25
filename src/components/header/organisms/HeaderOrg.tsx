import LoginButton from "../atoms/LoginButton";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import { Link } from "react-router-dom";
import * as S from "../../../styles/headerStyled/HeaderStyled";
import ToggleTheme from "../atoms/ToggleTheme";
import { useRecoilState } from "recoil";
import { loginState } from "../../../recoil/atom";
import PostBtn from "../atoms/PostBtn";
import ProfileIcon from "../atoms/ProfileIcon";
type HeaderOrgProps = {
  openModal: () => void;
};

const HeaderOrg = ({ openModal }: HeaderOrgProps) => {
  const [login] = useRecoilState(loginState);

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
        {login ? (
          <>
            <PostBtn />
            <ProfileIcon />
          </>
        ) : (
          <LoginButton openModal={openModal} />
        )}
      </S.HeaderRight>
    </S.HeaderContainer>
  );
};

export default HeaderOrg;

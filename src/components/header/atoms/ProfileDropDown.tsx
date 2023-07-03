import { ProfileDropdownContainer } from "../../../styles/headerStyled/HeaderStyled";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../../recoil/atom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface ProfileDropDownProps {
  setIsMenu: (value: boolean) => void;
}

const ProfileDropDown = ({ setIsMenu }: ProfileDropDownProps) => {
  const setLogin = useSetRecoilState(loginState);

  // 로그아웃 시 로컬스토리지 토큰정보 제거
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setLogin(false);
  };

  // 드롭다운이 열린 상태에서 클릭 이벤트 발생 시 언마운트
  const handleCloseDropDown = () => {
    setIsMenu(false)
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseDropDown)

    //드롭다운 언마운트 시 이벤트리스너 해제
    return () => window.removeEventListener('click', handleCloseDropDown)
  }, []);


  return (
    <ProfileDropdownContainer>
      <Link to="/mypage">마이페이지</Link>
      <Link to="/setting">설정</Link>
      <div onClick={handleLogout}>로그아웃</div>
    </ProfileDropdownContainer>
  );
};

export default ProfileDropDown;
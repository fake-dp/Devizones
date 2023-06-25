import { useRecoilState } from "recoil";
import { loginState } from "../../../recoil/atom";

const ProfileIcon = () => {
  const [_, setLogin] = useRecoilState(loginState);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setLogin(false);
  };

  // 우선 이부분은 아이콘으로 만들어야하며
  // 아이콘 클릭시 메뉴가 나오게 해야합니다.
  // 일단은 로그 아웃으로 만들어놨습니다.

  return <button onClick={handleLogout}>ProfileIcon</button>;
};

export default ProfileIcon;

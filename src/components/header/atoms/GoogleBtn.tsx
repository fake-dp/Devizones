import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleBtnWrapper } from "../../../styles/headerStyled/HeaderStyled";

const GoogleBtn = () => {
  return (
    <GoogleBtnWrapper>
      <div>
        <AiFillGoogleCircle />
        <span> 구글 로그인</span>
      </div>
    </GoogleBtnWrapper>
  );
};

export default GoogleBtn;

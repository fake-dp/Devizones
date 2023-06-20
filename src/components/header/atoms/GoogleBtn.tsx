import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleBtnWrapper } from "../../../styles/headerStyled/HeaderStyled";

const GoogleBtn = () => {
  const googleLogin = () => {
    window.location.href =
      "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google?redirect_uri=http://localhost:3001/oauth2/redirect";
  };

  return (
    <GoogleBtnWrapper>
      <div onClick={googleLogin}>
        <AiFillGoogleCircle />
        <span> 구글 로그인</span>
      </div>
    </GoogleBtnWrapper>
  );
};

export default GoogleBtn;

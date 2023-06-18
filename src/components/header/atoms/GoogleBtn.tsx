import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleBtnWrapper } from "../../../styles/headerStyled/HeaderStyled";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const GoogleBtn = () => {
  const navigate = useNavigate();

  const googleLogin = () => {
    window.location.href =
      "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorize/google";
  };

  const handleCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");

    try {
      const response = await axios.post("/oauth2/callback", {
        code: authorizationCode,
      });
      console.log(response);
      navigate("/");
      // const accessToken = response.data.accessToken;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCallback();
  }, []);

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

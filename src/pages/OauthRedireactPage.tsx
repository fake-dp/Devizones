import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { loginState } from "../recoil/atom";

const OauthRedirectPage = () => {
  const navigate = useNavigate();
  const [_, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    const getUrlParameter = (name: any) => {
      name = name.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
      const regex = new RegExp("[?&]" + name + "=([^&#]*)");

      const results = regex.exec(window.location.search);
      return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    const token = getUrlParameter("token");
    const value = JSON.parse(token);
    console.log(value);
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("accessToken", value.accessToken);
    localStorage.setItem("refreshToken", value.refreshToken);

    // 어세스토큰 해독
    const base64Url = value.accessToken.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decodedToken = JSON.parse(window.atob(base64));
    console.log(decodedToken);

    if (decodedToken) {
      setLogin(true);
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default OauthRedirectPage;

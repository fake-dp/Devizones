import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OauthRedirectPage = () => {
  const navigate = useNavigate();

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
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default OauthRedirectPage;

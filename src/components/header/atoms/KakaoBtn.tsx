import { RiKakaoTalkFill } from "react-icons/ri";
import { KakaoBtnWrapper } from "../../../styles/headerStyled/HeaderStyled";

const KakaoBtn = () => {
  return (
    <KakaoBtnWrapper>
      <div>
        <RiKakaoTalkFill />
        <span> 카카오 로그인</span>
      </div>
    </KakaoBtnWrapper>
  );
};

export default KakaoBtn;

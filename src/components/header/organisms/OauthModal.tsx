import GoogleBtn from "../atoms/GoogleBtn";
import KakaoBtn from "../atoms/KakaoBtn";
import * as S from "../../../styles/headerStyled/HeaderStyled";
import GitHubBtn from "../atoms/GitHubBtn";

type HeaderOrgProps = {
  closeModal: () => void;
};

const OauthModal = ({ closeModal }: HeaderOrgProps) => {
  return (
    <S.ModalWrapper>
      <S.ModalContents>
        <h5>간편 로그인</h5>
        <div>
          <GitHubBtn />
          <KakaoBtn />
          <GoogleBtn />
        </div>
        <S.ModalCloseBtn onClick={closeModal}>둘러보기</S.ModalCloseBtn>
      </S.ModalContents>
    </S.ModalWrapper>
  );
};

export default OauthModal;

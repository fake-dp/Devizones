import { LoginButtonWrapper } from "../../../styles/headerStyled/HeaderStyled";

type LoginButtonProps = {
  openModal: () => void;
};

const LoginButton = ({ openModal }: LoginButtonProps) => {
  return (
    <LoginButtonWrapper>
      <button onClick={openModal}>LOGIN</button>
    </LoginButtonWrapper>
  );
};

export default LoginButton;

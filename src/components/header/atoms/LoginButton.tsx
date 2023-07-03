import { ButtonWrapper } from "../../../styles/headerStyled/HeaderStyled";

type LoginButtonProps = {
  openModal: () => void;
};

const LoginButton = ({ openModal }: LoginButtonProps) => {
  return (
    <ButtonWrapper>
      <button onClick={openModal}>LOGIN</button>
    </ButtonWrapper>
  );
};

export default LoginButton;

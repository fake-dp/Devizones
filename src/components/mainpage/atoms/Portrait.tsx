import { PortraitContainer } from "../../../styles/gridCardStyled/GridCardStyled";

const Portrait = () => {
  const [icon, nickName] = ['', 'dummy'] //더미데이터

  return (
    <PortraitContainer>
      <div className="icon">{icon}</div>
      <span className="nickName">{nickName}</span>
    </PortraitContainer>
  )
};

export default Portrait;
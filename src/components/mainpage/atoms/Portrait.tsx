import { PortraitContainer } from "../../../styles/mainPageStyeld/GridCardStyled";
import { MainPageListType } from "../../../types/MainPageType";

const Portrait = (props: MainPageListType) => {
  return (
    <PortraitContainer profile={props.profile}>
      <div className="icon"></div>
      <p className="nickName">{props.nickname}</p>
    </PortraitContainer>
  )
};

export default Portrait;
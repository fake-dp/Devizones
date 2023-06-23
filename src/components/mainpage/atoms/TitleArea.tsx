import { TitleAreaContainer } from "../../../styles/mainPageStyeld/GridCardStyled";
import { MainPageListType } from '../../../types/MainPageType';

const TitleArea = (props: MainPageListType) => {
  return (
    <TitleAreaContainer>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
    </TitleAreaContainer>
  )
};

export default TitleArea;
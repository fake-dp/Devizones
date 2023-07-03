import Portrait from "../atoms/Portrait";
import TitleArea from "../atoms/TitleArea";
import IconArea from "../atoms/IconArea";
import { CardInfoContainer, CardItemContainer } from "../../../styles/mainPageStyeld/GridCardStyled";
import { MainPageListType } from "../../../types/MainPageType";
import { Link } from "react-router-dom";

const CardItem = (props: MainPageListType) => {
  return (
    <CardItemContainer thumbnail={props.thumbnail}>
      <Link to={`/detail/${props?.postId}`}>
        <CardInfoContainer thumbnail={props.thumbnail}>
          <TitleArea {...props}/>
          <IconArea {...props}/>
          <Portrait {...props}/>
        </CardInfoContainer>
      </Link>
    </CardItemContainer>
  )
};

export default CardItem;
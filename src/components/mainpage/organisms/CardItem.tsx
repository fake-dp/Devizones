import { CardItemContainer } from "../../../styles/gridCardStyled/GridCardStyled";
import Portrait from "../atoms/Portrait";
import TitleArea from "../atoms/TitleArea";
import IconArea from "../atoms/IconArea";
import DateArea from "../atoms/DateArea";
import { CardInfoContainer } from "../../../styles/gridCardStyled/GridCardStyled";
import { MainPageListType } from "../../../types/MainPageType";
import { Link } from "react-router-dom";

const CardItem = (props: MainPageListType) => {
  return (
    <CardItemContainer thumbnail={props.thumbnail}>
      <Link to=''>
        <CardInfoContainer>
          <IconArea {...props}/>
          <DateArea {...props}/>
          <TitleArea {...props}/>
          <Portrait {...props}/>
        </CardInfoContainer>
      </Link>
    </CardItemContainer>
  )
};

export default CardItem;
import { CardItemContainer } from "../../../styles/gridCardStyled/GridCardStyled";
import Portrait from "../atoms/Portrait";
import TitleArea from "../atoms/TitleArea";
import IconArea from "../atoms/IconArea";
import DateArea from "../atoms/DateArea";
import { CardInfoContainer } from "../../../styles/gridCardStyled/GridCardStyled";

const CardItem = () => {
  return (
    <CardItemContainer>
      <CardInfoContainer>
        <IconArea />
        <DateArea />
        <TitleArea />
        <Portrait />
    </CardInfoContainer>
    </CardItemContainer>
  )
};

export default CardItem;
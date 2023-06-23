import Portrait from "../atoms/Portrait";
import TitleArea from "../atoms/TitleArea";
import IconArea from "../atoms/IconArea";
import DateArea from "../atoms/DateArea";
import { CardInfoContainer } from "../../../styles/mainPageStyeld/GridCardStyled";

const CardInfo = () => {
  return (
    <CardInfoContainer>
      <IconArea />
      <DateArea />
      <TitleArea />
      <Portrait />
    </CardInfoContainer>
  )
};

export default CardInfo;
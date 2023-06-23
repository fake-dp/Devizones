import CardItem from "../organisms/CardItem";
import { GridCardContainer } from "../../../styles/mainPageStyeld/GridCardStyled";
import { useRecoilValue } from "recoil";
import { mainList } from "../../../recoil/atom";

const GridCard = () => {
  const postList = useRecoilValue(mainList);
  
  return (
    <GridCardContainer>
      {postList?.map((card, i) => <CardItem key={i} {...card}/>)}
    </GridCardContainer>
  )
};

export default GridCard;
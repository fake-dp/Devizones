import CardItem from "../organisms/CardItem";
import { GridCardContainer } from "../../../styles/gridCardStyled/GridCardStyled";
import { useRecoilValue } from "recoil";
import { mainList } from "../../../recoil/atom";

const GridCard = () => {
  const postList = useRecoilValue(mainList);
  
  return (
    <>
      <GridCardContainer>
      {postList?.map((card) => (
        <CardItem key={card.postId} {...card}/>
      ))}
    </GridCardContainer>
    </>
  )
};

export default GridCard;
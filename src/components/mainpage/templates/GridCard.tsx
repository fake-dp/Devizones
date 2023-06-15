import CardItem from "../organisms/CardItem";
import { GridCardContainer } from "../../../styles/gridCardStyled/GridCardStyled";

const GridCard = () => {
  const dummy = new Array(14).fill('')
  
  return (
    <>
      <GridCardContainer>
      {dummy?.map((card, i) => (
        <CardItem key={i}/>
      ))}
    </GridCardContainer>
    </>
  )
};

export default GridCard;
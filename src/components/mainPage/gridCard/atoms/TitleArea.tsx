import { TitleAreaContainer } from "../../../../styles/gridCardStyled/GridCardStyled";

const TitleArea = () => {
  const [title, summary] = ['Title', 'summarfsafsafffsfsfsafsfasfas fs afsfas  fsa fsf sf af easfawrwa4241243y'] // 백엔드에서 받아오기

  return (
    <TitleAreaContainer>
      <h3>{title}</h3>
      <p>{summary}</p>
    </TitleAreaContainer>
  )
};

export default TitleArea;
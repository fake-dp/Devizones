import { Link } from "react-router-dom";
import { ButtonWrapper } from "../../../styles/headerStyled/HeaderStyled";

const PostBtn = () => {
  return (
    <ButtonWrapper>
      <Link to="edit">글쓰기</Link>
    </ButtonWrapper>
  )
};

export default PostBtn;

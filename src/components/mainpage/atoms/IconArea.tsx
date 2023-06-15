import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IconAreaContainer } from '../../../styles/gridCardStyled/GridCardStyled';

const IconArea = () => {
  const [likes, comments] = [0, 0] //백엔드에서 받아오기

  return (
    <IconAreaContainer>
      <AiFillHeart />
      <span>{likes}</span>
      <FaComment />
      <span>{comments}</span>
    </IconAreaContainer>
  )
};

export default IconArea;
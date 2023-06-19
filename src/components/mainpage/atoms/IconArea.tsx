import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IconAreaContainer } from '../../../styles/gridCardStyled/GridCardStyled';
import { MainPageListType } from '../../../types/MainPageType';

const IconArea = (props: MainPageListType) => {
  let comments = 0 // dummy data

  return (
    <IconAreaContainer>
      <AiFillHeart />
      <span>{props.like}</span>
      <FaComment />
      <span>{comments}</span>
    </IconAreaContainer>
  )
};

export default IconArea;
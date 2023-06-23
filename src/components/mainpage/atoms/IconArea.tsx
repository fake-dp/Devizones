import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IconAreaContainer } from '../../../styles/mainPageStyeld/GridCardStyled';
import { MainPageListType } from '../../../types/MainPageType';

const IconArea = (props: MainPageListType) => {
  //createAt 속성 날짜를 2023.06.11 형식으로 변환
  const convertDate = (param: string) => {
    let date = new Date(param);
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString(); 
    let day = date.getDate().toString();

    if(Number(month) < 10) month = '0' + month;
    if(Number(day) < 10) day = '0' + day;

    return `${year}.${month}.${day}`
  }

  let comments = 0 // dummy data

  return (
    <IconAreaContainer>
      <AiFillHeart />
      <span>{props.like}</span>
      <FaComment />
      <span>{comments}</span>
      <p>{convertDate(props.createdAt as string)}</p>
    </IconAreaContainer>
  )
};

export default IconArea;
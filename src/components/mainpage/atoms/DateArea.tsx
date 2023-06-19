import { DateAreaContainer } from '../../../styles/gridCardStyled/GridCardStyled';
import { MainPageListType } from '../../../types/MainPageType';

const DateArea = (props: MainPageListType) => {
  const convertDate = (param: string) => {
    let date = new Date(param);

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString(); 
    let day = date.getDate().toString();

    if(Number(month) < 10) month = '0' + month;
    if(Number(day) < 10) day = '0' + day;

    return `${year}.${month}.${day}`
  }
  return (
    <DateAreaContainer>
      {convertDate(props.createdAt)}
    </DateAreaContainer>
  )
};

export default DateArea;
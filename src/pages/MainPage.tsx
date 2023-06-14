import Banner from "../components/mainPage/banner/templates/Banner";
import CardItem from "../components/mainPage/gridCard/templates/CardItem";
import { GridCardContainer } from "../styles/gridCardStyled/GridCardStyled";
import axios from "axios";
const MainPage = () => {
  const getApi = async () => {
    const response = await axios.get(
      "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts"
    );
    console.log(response.data);
  };

  // 그냥 벝튼 클릭해서 api 호출 잘 되는지 콘솔창 확인하기

  return (
    <>
      <Banner />
      {/* <GridCardContainer>
      {dummyArray?.map((card, i) => (
        <CardItem key={i}/>
      ))}
    </GridCardContainer> */}
      <button
        onClick={() => {
          getApi();
        }}
      >
        에이피 아이 호출
      </button>
    </>
  );
};

export default MainPage;

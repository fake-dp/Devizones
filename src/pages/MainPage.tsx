import Banner from "../components/mainpage/templates/Banner";
import GridCard from "../components/mainpage/templates/GridCard";
import axios from "axios";
const MainPage = () => {
  // const getApi = async () => {
  //   const response = await axios.get(
  //     "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts"
  //   );
  //   console.log(response.data);
  // };
  // 그냥 벝튼 클릭해서 api 호출 잘 되는지 콘솔창 확인하기

  return (
    <>
      <Banner />
      <GridCard />
    </>
  );
};

export default MainPage;

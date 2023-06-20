import Banner from "../components/mainpage/templates/Banner";
import GridCard from "../components/mainpage/templates/GridCard";
import { useEffect } from "react";
import mainApi from "../api/MainApi";
import { useRecoilState } from "recoil";
import { mainList } from "../recoil/atom";

const MainPage = () => {
  // 아톰을 사용하여 상태관리를 하고 있습니다.
  // 아톰을 사용하면 상태관리를 하기 위해 리덕스를 사용할 때 처럼
  // 액션, 리듀서, 디스패치를 사용하지 않아도 됩니다.
  const [postList, setPostList] = useRecoilState(mainList);

  // useEffect를 사용하여 컴포넌트가 마운트 되었을 때
  // getApi 함수를 실행하여 데이터를 받아오고 있습니다.
  useEffect(() => {
    getApi();
  }, []);

  // getApi 함수를 실행하여 아톰에 데이터를 저장하고 있습니다.
  const getApi = async () => {
    const data = await mainApi.getMainList();
    setPostList(data);
  };

  // 콘솔창을 확인해보면 아톰에 데이터가 저장되어 있는 것을 확인할 수 있습니다.
  console.log("atom", postList);

  // useRecoilValue를 활용해서 메인 컴포넌트에 한번 뿌려보세요 !

  return (
    <>
      <Banner />
      <GridCard />
    </>
  );
};

export default MainPage;

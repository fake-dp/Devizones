import Banner from "../components/mainpage/templates/Banner";
import GridCard from "../components/mainpage/templates/GridCard";
import { useState, useEffect, useRef } from "react";
import mainApi from "../api/MainApi";
import { useRecoilState } from "recoil";
import { mainList } from "../recoil/atom";

const MainPage = () => {
  // 아톰을 사용하여 상태관리를 하고 있습니다.
  // 아톰을 사용하면 상태관리를 하기 위해 리덕스를 사용할 때 처럼
  // 액션, 리듀서, 디스패치를 사용하지 않아도 됩니다.
  
  const [ page, setPage ]  = useState(3); //추가 페이지 state
  const [ limit, setLimit ] = useState(false); //더 불러올 페이지가 없는지 확인용 state
  const [ postList, setPostList ] = useRecoilState(mainList);
  const observerTarget = useRef<HTMLDivElement>(null); //감시 타겟 ref

  const getApi = async () => {
    const data = await mainApi.getMainList(page);
    //더이상 불러올 데이터가 없을 경우 무한스크롤링을 중지하기위한 limit 업데이트
    if(JSON.stringify(data) === JSON.stringify(postList)){
      setLimit(true);
    }else{
      setPostList(data);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(( entries ) => {
      //반복문으로 순회하는 이유: 현재 감시요소는 하나밖에 없기에 entries 배열의 요소또한 하나지만 추후 추가적인 확장을 용이하게 하기 위함
      entries.forEach(entry => {

         //타겟이 뷰포트와 교차할 경우 
        if(entry.isIntersecting){
          //page 증가
          setPage((prevPage) => prevPage + 1);
          //api 호출
          getApi();
          if(limit){
            //불러올 데이터가 없을 경우 observe 해제
            observer.unobserve(observerTarget.current as Element);
          }
          console.log(page)
        }
      });
    }, {threshold: 0.1});//타겟이 0.1만큼 뷰포트에 들어올 경우 실행

    if(observerTarget.current){
      observer.observe(observerTarget.current)
    };

    return () => {
      if(observerTarget.current){
        observer.unobserve(observerTarget.current)
      }
    }
  }, [postList]);

  return (
    <>
      <Banner />
      <GridCard />
      <div ref={observerTarget}>Loading...</div>
    </>
  );
};

export default MainPage;

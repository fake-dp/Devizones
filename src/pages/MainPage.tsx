import Banner from "../components/mainpage/templates/Banner";
import GridCard from "../components/mainpage/templates/GridCard";
import { useState, useEffect, useRef } from "react";
import mainApi from "../api/MainApi";
import { useRecoilState } from "recoil";
import { mainList } from "../recoil/atom";
import ScrollTop from "../components/mainpage/templates/ScrollTop";

const MainPage = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ cursor, setCursor ]  = useState(-1);
  const [ limit, setLimit ] = useState(false); // 데이터를 모두 불러왔는지 관리
  const [ postList, setPostList ] = useRecoilState(mainList);
  const observerTarget = useRef<HTMLDivElement>(null); //감시 타겟 ref

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await mainApi.getMainList(cursor);
      const { items, nextCursor } = data;

      //불러올 데이터가 더 이상 없을 경우 무한스크롤링 종료
      if(nextCursor.key === -1){
        setLimit(true);
      }else{
        setPostList([...postList, ...items]);
        setCursor(nextCursor.key);
      }
      setIsLoading(false);

    } catch (error) {
      console.error(error);
      setIsLoading(false);
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         //타겟이 뷰포트와 교차할 경우 api 호출
        if(entry.isIntersecting && !isLoading) fetchData();
      });
    }, {threshold: 0.1});//타겟이 0.1만큼 뷰포트에 들어올 경우 실행

    //타겟 감시 시작
    if(observerTarget.current) observer.observe(observerTarget.current);

    //불러올 데이터가 더 이상 없을 경우 무한스크롤링 종료
    if(limit) observer.disconnect();

    return () => {
      //메인 컴포넌트가 언마운트 될 경우 무한스크롤링 종료
      if(observerTarget.current) observer.disconnect();
    }
  }, [isLoading, fetchData]);

  return (
    <>
      <Banner />
      <GridCard />
      <ScrollTop />
      <div ref={observerTarget}></div>
    </>
  );
};

export default MainPage;

import styled from "styled-components";
import { MainPageListType } from "../../types/MainPageType";

//카드 그리드 전체 레이아웃
export const GridCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 30px 0 0;
  padding: 0 50px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 60px 0 0;
    padding: 0 100px;
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  gap: 60px;
  overflow: hidden;
`;

//프로필 이미지 영역
export const PortraitContainer = styled.div<MainPageListType>`
  display: flex;
  gap: 10px;
  margin: auto 0 0;
  .icon {
    width: 2rem;
    height: 2rem;
    background: #fff url(${props => props.profile}) center center/cover no-repeat;
    border-radius: 2rem;
  }
  .nickName {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    ::after {
      content: '';
      display: block;
      width: 70%;
      height: 4px;
      background: #fff;
      margin: 5px 0 0;
    }
  }
`;

//title, summary
export const TitleAreaContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: #fff;
  overflow: hidden;
  margin: 0 0 auto;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
    word-break:break-all
  }
  p {
    font-size: 1rem;
    width: 100%;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

//likes, comments, date
export const IconAreaContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  span {
    color: #fff;
  }
  svg {
    fill: #fff;
  }
  p {
    flex: 1;
    text-align: end;
    font-size: 0.8rem;
    color: #fff;
  }
`;

//카드 반투명 info창
export const CardInfoContainer = styled.div<MainPageListType>`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: ${props => props.thumbnail ? '45%' : '100%'};
  gap: 10px;
  padding: 12px 20px;
  box-sizing: border-box;
  background: rgba(0,0,0,60%);
`;

//각각의 카드 container
export const CardItemContainer = styled.div<MainPageListType>`
  a {
    display: flex;
    align-items: flex-end;
    height: 330px;
    border-radius: 2rem;
    overflow: hidden;
    background: #fff url(${props => props.thumbnail ? props.thumbnail : null}) center center/cover;

  }
`;
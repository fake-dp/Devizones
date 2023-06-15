import styled from "styled-components";

//banner container
export const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 40px;
  margin: 20px 50px;
  @media (min-width: 768px) {
    padding: 20px 80px;
    margin: 20px 100px;
  }
  box-sizing: border-box;
  border-radius: 2rem;
  background: #333;
  height: 300px;
`;

//Link btn 
export const LinkBtnContainer = styled.div`
  a {
    display: flex;
    height: 2rem;
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 1.5rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.125s ease-in 0s;
    span {
      color: #fff;
      font-size: 1rem;
    }
    svg {
      fill: #fff;
    }
  }
  background: #333;
  :hover {
    border-color: #333;
    background-color: #fff;
    svg {
      fill: #333;
    }
    span {
      color: #333;
    }
  }
`;

//banner left
export const BannerLeftContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  h2 {
    font-weight: bold;
    color: #fff;
    font-size: 2rem;
    span {
      font-size: 3rem;
    }
    ::after {
      content: '';
      display: block;
      width: 20%;
      height: 6px;
      background: #fff;
      margin: 30px 0 0;
    }
  }
  @media (min-width: 480px) {
    width: 70%;
  }
`;

//banner right 
export const BannerRightContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  margin: auto 0%;
  gap: 20px;
  p {
    display: none;
  }
  @media (min-width: 768px) {
    flex: 1;
    flex-wrap: wrap;
    align-items: center;
    p {
      display: block;
      width: 100%;
      margin: 40px 0 0;
      color: #fff;
      font-weight: bold;
      content: 'sex';
      ::after {
        content: '';
        display: block;
        width: 20%;
        height: 6px;
        background: #fff;
        margin: 30px 0 0;
      }
    }
  }
`;




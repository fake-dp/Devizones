import styled, { css } from "styled-components";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

// 헤더 레이아웃
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 70px;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
  background-color: ${props => props.theme.background};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// 헤더 로그인 버튼
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button, > a {
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: normal;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    outline: none;
    word-break: keep-all;
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.font};
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.back_reverse};
      color: ${props => props.theme.background};
    }
  }
`;

//헤더 Toggle Theme 아이콘
export const ThemeIconWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 2rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 1rem;
  background: ${props => props.theme.background};
  cursor: pointer;
`

const themeStyles = css`
  position: absolute;
  top: 0;
  font-size: 1.3rem;
  padding: 0.35rem;
  background: ${props => props.theme.font};
  border-radius: 1rem;
  transition: all 2s ease-in;
`

export const StyledSun = styled(BsSunFill)`
  ${themeStyles}
  right: 0;
  fill: #fff;
`;

export const StyledMoon = styled(BsMoonFill)`
  ${themeStyles}
  left: 0;
  fill: #000;
`;

// 헤더 서치 아이콘 css
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  > svg {
    font-size: 1.3rem;
    color: ${props => props.theme.border};
    padding: 0.5rem;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
    border: 1px solid ${props => props.theme.border};
    border-radius: 50%;
    &:hover {
      border-radius: 50%;
      background: ${props => props.theme.back_reverse};
      color: ${props => props.theme.background};
    }
  }
`;

// 깃허브 버튼
export const GithubBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24292e;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2f363d;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #fff;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// 카카오 버튼
export const KakaoBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ffeb3b;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #000000;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #000000;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// 구글 버튼
export const GoogleBtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dd4b39;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c53727;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > span {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
    > svg {
      color: #fff;
      border: none;
      font-size: 1.7rem;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

// auth모달 css
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContents = styled.div`
  width: 370px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h5 {
    color: #999;
    margin: 10px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const ModalCloseBtn = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-top: 10px;
  &:hover {
    background-color: #999;
    color: white;
  }
`;

export const ProfileIconContanier = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  cursor: pointer;
  .icon {
    width: 2rem;
    height: 2rem;
    /* background: #fff url(${props => props.profile}) center center/cover no-repeat; */
    background: #f00;
    border-radius: 2rem;
  }
`

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.back_sub};
  color: ${props => props.theme.font};
  width: 120px;
  bottom: -20px;
  left: -40px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
  a, div {
    padding: 20px 20px;
    box-sizing: border-box;
    display: block;
    color: ${props => props.theme.back_reverse};
    background: ${props => props.theme.back_sub};
    &:hover {
      background: ${props => props.theme.back_reverse};
      color: ${props => props.theme.background};
    }
  }

`
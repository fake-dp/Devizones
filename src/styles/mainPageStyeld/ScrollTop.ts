import { styled } from "styled-components";

export const ScrollTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 30px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.back_reverse};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.125s ease-in 0s;
  svg {
    font-size: 2rem;
    padding: 10px;
    fill: ${props => props.theme.back_reverse}
  }
  &:hover {
    background: ${props => props.theme.back_reverse};
    border: 1px solid ${props => props.theme.background};
    svg {
      fill: ${props => props.theme.background}
    }
  }
`;
import { DefaultTheme } from "styled-components";

//전역 테마 컬러 타입 정의
declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    back_sub: string;
    font: string;
    border: string;
    back_reverse: string;
  }
}

export const lightTheme: DefaultTheme = {
  background: '#fff',
  back_sub: '#f9f9f9',
  back_reverse: '#333',
  font: '#333',
  border: '#333'
};

export const darkTheme: DefaultTheme = {
  background: '#333',
  back_sub: '#444',
  font: '#fff',
  border: '#fff',
  back_reverse: '#fff'
};
import { atom } from "recoil";
import { MainPageListType } from "../types/MainPageType";

// main list
export const mainList = atom({
  key: "mainList",
  default: [] as MainPageListType[],
});

// 테마 state
export const themeState = atom({
  key: 'themeState',
  default: 'light',
});
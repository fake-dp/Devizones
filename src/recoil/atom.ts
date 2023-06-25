import { atom } from "recoil";
import { MainPageListType } from "../types/MainPageType";

// login state
export const loginState = atom({
  key: "loginState",
  default: false,
});

// main list
export const mainList = atom({
  key: "mainList",
  default: [] as MainPageListType[],
});

// 테마 state
export const themeState = atom({
  key: "themeState",
  default: "light",
});

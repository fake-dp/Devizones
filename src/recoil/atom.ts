import { atom } from "recoil";
import { MainPageListType } from "../types/MainPageType";
export const atomTest = atom({
  key: "testData",
  default: {
    test: "test",
  },
});

// main list
export const mainList = atom({
  key: "mainList",
  default: [] as MainPageListType[],
});

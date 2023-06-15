import { atom } from "recoil";

export const atomTest = atom({
  key: "testData",
  default: {
    test: "test",
  },
});

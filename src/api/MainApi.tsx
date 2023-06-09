import axios from "axios";
import { MainPageListType } from "../types/MainPageType";
const BASEURL =
  "http://ec2-3-39-180-100.ap-northeast-2.compute.amazonaws.com:8080";

// 원래는 env 파일에다 엔드포인트를 저장해놓고 사용해야합니다. 종속성이 생겨서 일단은 그냥 적었습니다.
const mainApi = {
  getMainList: async (): Promise<MainPageListType[]> => {
    const response = await axios.get(`${BASEURL}/api/v1/posts`);
    return response.data.body.items as MainPageListType[];
  },
};

export default mainApi;

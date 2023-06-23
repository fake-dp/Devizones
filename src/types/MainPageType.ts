// 메인 리스트 타입
// styled-components에서 불러서 쓰려고 ?:을 붙였습니다
export interface MainPageListType {
  postId?: number;
  writerId?: number;
  title?: string;
  summary?: string;
  createdAt?: string;
  nickname?: string;
  profile?: string;
  thumbnail?: string | null;
  like?: number;
}

//mainApi body 타입
export interface MainPageType {
  items: MainPageListType[];
  nextCursor: {
    key: number;
  }
}

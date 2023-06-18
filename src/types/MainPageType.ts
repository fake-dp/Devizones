// 메인 리스트 타입
export interface MainPageListType {
  postId: number;
  writerId: number;
  title: string;
  summary: string;
  createdAt: string;
  nickname: string;
  profile: string;
  thumbnail: string | null;
  like: number;
}

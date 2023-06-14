import { BsGithub } from "react-icons/bs";
import { GithubBtnWrapper } from "../../../styles/headerStyled/HeaderStyled";
const GitHubBtn = () => {
  return (
    <GithubBtnWrapper>
      <div>
        <BsGithub />
        <span> 깃허브 로그인</span>
      </div>
    </GithubBtnWrapper>
  );
};

export default GitHubBtn;

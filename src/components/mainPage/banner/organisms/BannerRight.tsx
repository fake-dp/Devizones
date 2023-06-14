import { BannerRightContainer } from "../../../../styles/bannerStyled/BannerStyeld";
import LinkBtn from "../atoms/LinkBtn";

const BannerRight = () => {
  return (
    <BannerRightContainer>
      <p>
        안녕 우리는 맨날 개발한다<br />
        개발 블로그를
      </p>
      <LinkBtn />
    </BannerRightContainer>
  )
};

export default BannerRight;
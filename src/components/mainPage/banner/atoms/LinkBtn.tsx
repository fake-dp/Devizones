import { HiArrowLongRight } from "react-icons/hi2"
import { LinkBtnContainer } from "../../../../styles/bannerStyled/BannerStyeld";
import { Link } from "react-router-dom";

const LinkBtn = () => {
  return (
    <LinkBtnContainer>
      <Link to=''>
        <span>Link</span>
        <HiArrowLongRight />
      </Link>
    </LinkBtnContainer>
  )
};

export default LinkBtn;
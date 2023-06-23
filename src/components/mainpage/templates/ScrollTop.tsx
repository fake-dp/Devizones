import { ScrollTopContainer } from "../../../styles/mainPageStyeld/ScrollTop";
import { BiArrowToTop } from 'react-icons/bi';

const ScrollTop = () => {

  const scrollToTop = () => window.scrollTo(0,0);
  
  return (
    <ScrollTopContainer onClick={() => scrollToTop()}>
      <BiArrowToTop />
    </ScrollTopContainer>
  )
};

export default ScrollTop;
import BannerLeft from "../organisms/BannerLeft"
import BannerRight from "../organisms/BannerRight"
import { BannerContainer } from "../../../styles/mainPageStyeld/BannerStyeld"

const Banner = () => {
  return (
    <BannerContainer>
      <BannerLeft />
      <BannerRight />
    </BannerContainer>
  )
}

export default Banner
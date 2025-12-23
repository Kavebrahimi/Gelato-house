import type { JSX } from "react"
import OrderStatus from "../base/orderStatus"
import type React from "react"
import Slider from "../base/slider";
import { sliderItems } from "@/constants/slider";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";




const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <OrderStatus/>
      <Slider
        slides={sliderItems}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true
        }}
        navigation
        pagination={{
          clickable: true
        }}
        effect="fade"
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
      />
    </>
  )
}

export default HomePage

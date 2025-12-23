import React, { type JSX } from 'react';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';
import "swiper/swiper.css";
//@ts-expect-error Ignore missing types for swiper styles
import "swiper/css/navigation";
//@ts-expect-error Ignore missing types for swiper styles
import "swiper/css/effect-fade";
//@ts-expect-error Ignore missing types for swiper styles
import "swiper/css/pagination";
import Container from '../container';


type Slides = {
  id: number,
  src: string,
  alt: string,
}

type SliderProps = SwiperProps & {
  slides: Slides[]
}

const Slider: React.FC<SliderProps> = ({ slides, ...props }): JSX.Element => {
  return (
    <Container>
      <Swiper
        className='mySwiper'
        {...props}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} className='w-full' />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider

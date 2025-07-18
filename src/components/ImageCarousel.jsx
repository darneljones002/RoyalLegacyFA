import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './ImageCarousel.css';

const ImageCarousel = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      effect="fade"
      speed={1000}
      className="w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen relative z-0"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-screen overflow-hidden">
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className={`w-full h-full object-cover ${slide.position}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;

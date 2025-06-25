import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './ImageCarousel.css'; // custom styles

const ImageCarousel = ({ slides }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        effect="fade"
        speed={1000}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-64 sm:h-[30rem] overflow-hidden rounded-lg shadow-xl">
              <img
                src={slide.image}
                alt={slide.captionTitle}
                className="w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-cream">
                <h3 className="text-xl sm:text-3xl font-bold text-gold drop-shadow">{slide.captionTitle}</h3>
                <p className="text-sm sm:text-lg text-e5e2d6 mt-2">{slide.captionText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;

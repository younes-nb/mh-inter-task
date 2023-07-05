import {Navigation, Thumbs} from 'swiper/modules'
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/swiper-react';
import {useRef, useState} from "react";
import './Slider.css'
import 'swiper/css'
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";


function Slider({images}: { images: { image: string, thumb: string }[] }) {
  const [activeThumb, setActiveThumb] = useState()
  const swiperRef = useRef<SwiperRef>();
  return (
    <section className="w-72">
      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{swiper: activeThumb}}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className='product-images-slider'
      >
        {
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt="product images"/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="relative mt-5">
        <img id="prev" src={prev} alt="prev" onClick={() => swiperRef.current?.slideNext()}
             className="cursor-pointer absolute top-1/3"/>
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className='product-images-slider-thumbs'
        >
          {
            images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-images-slider-thumbs-wrapper">
                  <img src={item.thumb} alt="product images"/>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <img id="next" src={next} alt="next" onClick={() => swiperRef.current?.slidePrev()}
             className="cursor-pointer absolute top-1/3"/>
      </div>
    </section>
  )
}

export default Slider;
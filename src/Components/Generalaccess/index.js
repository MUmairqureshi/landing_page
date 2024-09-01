import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowimage from '../../asserts/images/arrow.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import one from "../../asserts/images/little.png";
import secound from "../../asserts/images/hawamin.png";
import third from "../../asserts/images/picnic.png";
import forth from "../../asserts/images/lucaw.png";

import './style.css'


const Generalaccess = () => {
  const swiperRef = useRef(null);

  const cards = [
    { id: 1, img: one, text: "hello jhon" },
    { id: 2, img: secound, text: "hello jhon" },
    { id: 3, img: third, text: "hello jhon" },
    { id: 4, img: forth, text: "hello jhon" },
    { id: 5, img: one, text: "hello jhon" },
  ];

 



  const adjustImageHeight = (swiper) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      const img = slide.querySelector('img');
   
    });
  };
  
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      adjustImageHeight(swiperInstance);
      swiperInstance.on('slideChange', () => adjustImageHeight(swiperInstance));
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', () => adjustImageHeight(swiperInstance));
      }
    };
  }, []);

  return (
    <div className='generalsccess'>
      <div className='container'>
        <div className='row '>
          <div className='col-md-12'>
            <div>
              <h4 className='generalsccesstitle mb-04'>Book General Access ticket and
                enjoy the attractions for free
              </h4>
              <span className='generalsccesspara'>Book General Access Ticket <img className='generalsccessarrow' src={arrowimage} /> </span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
  ref={swiperRef}
  spaceBetween={10}
  loop={true}
  autoplay={{ delay: 1000, disableOnInteraction: false }}
  speed={800}
  className="custom-swiper"
  breakpoints={{
     
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
 
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
      768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
      1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
>
  {cards.map((card) => (
    <SwiperSlide key={card.id}>
      <div className="cards">
        <img src={card.img} />
        <p className='color-white' id='paras' >{card?.text}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default Generalaccess;
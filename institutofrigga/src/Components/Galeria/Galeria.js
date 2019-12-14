
import React from 'react';
import Swiper from 'react-id-swiper';
import aimg4 from '../../assets/img/66.jpg';
import aimg5 from '../../assets/img/marmita.jpg';



  const MutipleSlidesPerView = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    }
    return (
      <Swiper {...params}>]
        <div className="direita-galeria">
        <img src={aimg4} alt="Mulher" /></div>
        <div className ="MutipleSlidesPerView"><img src={aimg5} alt="Marmita" /></div>
        <div className ="MutipleSlidesPerView"><img src={aimg4} alt="Mulher" /></div>
        <div className ="MutipleSlidesPerView"><img src={aimg5} alt="Marmita" /></div>
        <div className ="MutipleSlidesPerView"><img src={aimg4} alt="Mulher" /></div>
        <div className ="MutipleSlidesPerView"><img src={aimg5} alt="Marmita" /></div>
      </Swiper>
    )
  };
  export default MutipleSlidesPerView;
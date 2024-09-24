import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slider01 from '../../assets/img/png/slider01.png';
import Slider02 from '../../assets/img/png/slider02.png';
import Slider03 from '../../assets/img/png/slider03.png';
import Slider04 from '../../assets/img/png/slider04.png';

import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
<Swiper
            className='slider'
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }} 
            modules={[Pagination, Navigation]} 
        >
            <SwiperSlide>
                <img src={Slider01} alt="Slider 01" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slider02} alt="Slider 02" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slider03} alt="Slider 03" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slider04} alt="Slider 04" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
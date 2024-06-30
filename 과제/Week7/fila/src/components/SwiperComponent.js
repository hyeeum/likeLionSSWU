import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/scss/SwiperComponent.scss'

const SwiperComponent = () => {
    return (
        <Swiper
            spaceBetween={30} // 슬라이드 간 간격
            slidesPerView={1} // 한 번에 보여줄 슬라이드 수
            loop={true} // 반복 재생
            navigation={true} // 네비게이션 화살표 표시
            modules={[Navigation]} // 네비게이션 모듈 추가
            className="swiper-container" // 스타일을 적용할 클래스 이름
        >
            <SwiperSlide>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMDRfOSAg%2FMDAxNzAxNjcxMTU2Njgy.vsreU57hRqQkgFjR3jS0Ahue5qiAYARI-840zgEsaVog.2EEU6K0eZ0bk1JOUyHBW7UFwnVN8phD3WrGsjRxmweQg.JPEG.viper6262%2Fbatch_batch_Han_so-hee_motorcore_collection_06.jpg&type=sc960_832" alt="Slide 1" className="swiper-slide-image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjBfMTI5%2FMDAxNzAwNDgzMTk1NzMx.J2EIp9ZUS32QjgbV8qM4gU2e2sPnxgXMNvhXjHIIZd8g.ZDAaQsMoeBnqKDONm8KKkbe2t9szKpAVHSFS3PUxPBsg.JPEG.dlwlqk%2F11.JPG&type=sc960_832" alt="Slide 2" className="swiper-slide-image" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;


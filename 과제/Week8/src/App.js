import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Autoplay 모듈의 CSS 가져오기
import { Autoplay } from 'swiper/modules';
import bookImage from './assets/scss/setting/image/book.jpg';
import booksImage from './assets/scss/setting/image/books.jpg';
import copyIcon from './assets/scss/setting/image/link.png';
import logoImage from './assets/scss/setting/image/logo.svg'; 

const copyCurrentUrl = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('링크가 복사되었습니다.');
  });
};

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <ul>
          <li
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}
          >
            초등 3학년 교과서
          </li>
          <li
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            초등 4학년 교과서
          </li>
        </ul>
      </nav>

      <div className="layout">
        <div className="left-section">
          <div className="text-section">
            <h2>2022 개정</h2>
            <h2>교육과정 교과서</h2>
            <p>지학사 고지사가 수업에 필요한 모든 것을 지원합니다.</p>
          </div>

          <section className="slider-left">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000 }} // 자동 넘기기 설정, 3000ms 간격
              modules={[Autoplay]} // Autoplay 모듈을 사용
            >
              <SwiperSlide>
                <img src={bookImage} alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bookImage} alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bookImage} alt="Slide 3" />
              </SwiperSlide>
            </Swiper>
          </section>
        </div>

        <section className="slider-right">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 6000 }} // 자동 넘기기 설정, 3000ms 간격
            modules={[Autoplay]} // Autoplay 모듈을 사용
          >
            <SwiperSlide>
              <img src={booksImage} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={booksImage} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={booksImage} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>

      <div className="layout">
        <div className="right-section">
          <div className="content-container">
            <div className="text-section">
              <h2>선생님과 학생을 생각하는</h2>
              <h2>지학사 교과서</h2>
              <p>가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.</p>
              <p>항상 학교 현장을 고민하는 지학사 교과서가</p>
              <p>그동안의 경험을 모아 더 나은 수업을 도와드립니다.</p>
            </div>
            <div className="image-row">
              {[...Array(6)].map((_, index) => (
                <div className="image-container" key={index}>
                  <img src={bookImage} alt={`book ${index}`} />
                  <p className="image-text">
                    {['수학', '사회', '과학', '음악', '미술', '체육'][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="image-grid">
            {[...Array(16)].map((_, index) => (
              <div className="image-item" key={index}>
                <img src={bookImage} alt={`book ${index}`} />
                <div className="overlay">
                  <button>자세히 보기</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="copy-button" onClick={copyCurrentUrl}>
        <img src={copyIcon} alt="Copy link" />
      </div>

      <footer className="footer">
        <img src={logoImage} alt="Logo" className="footer-logo" />
        <div className="footer-text">
          서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452<br />
          통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR<br />
          대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002<br />
          COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.<br />
          (주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.
        </div>
      </footer>

      <style jsx>{`
        .container {
          width: 1920px;
          margin: 0 auto;
        }

        /* Navigation bar styling */
        .navbar {
          width: 100%;
          background-color: #fff;
          padding: 10px 0;
          position: fixed;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          width: 139px;
          height: 47px;
          margin-left: 20px;
        }

        .navbar ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }

        .navbar ul li {
          margin: 0 20px;
          padding: 10px 20px;
          color: #000;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
        }

        .navbar ul li:hover {
          color: yellow;
        }

        .layout {
          display: flex;
          margin: 100px 0 50px;
        }

        .left-section {
          width: 50%;
          padding-right: 20px;
        }

        .slider-left {
          width: 320px;
          height: 420px;
        }

        .slider-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-right {
          width: 50%;
          height: 800px;
          padding-left: 20px;
        }

        .slider-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .right-section {
          width: 100%;
          padding-right: 20px;
        }

        .content-container {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .text-section {
          flex: 1;
        }

        .text-section h2 {
          margin: 0 0 10px;
        }

        .text-section p {
          margin: 5px 0;
        }

        .image-row {
          display: flex;
          flex-wrap: nowrap;
          gap: 10px;
          flex: 2;
        }

        .image-container {
          width: 120px;
          height: 150px;
          background-color: #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .image-container:hover {
          background-color: #f7d600;
        }

        .image-container img {
          width: 100px;
          height: 100px;
        }

        .image-text {
          margin-top: 5px;
          font-size: 14px;
          text-align: center;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-gap: 10px;
          margin-top: 50px;
        }

        .image-item {
          position: relative;
          overflow: hidden;
        }

        .image-item img {
          width: 100%;
          height: auto;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-item:hover .overlay {
          opacity: 1;
        }

        .overlay button {
          padding: 10px 20px;
          background-color: black;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 10px
        }

        .copy-button {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 60px;
          height: 60px;
          background-color: yellow;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 24px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .footer {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: #f0f0f0;
        }

        .footer-logo {
          width: 100px;
          height: auto;
          margin-right: 20px;
        }

        .footer-text {
          font-size: 12px;
          line-height: 1.6;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default App;

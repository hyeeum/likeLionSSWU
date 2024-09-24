import React from 'react'
import Slider from './Section/Slider'
import Notice from './Notice';
import introduce from '../assets/img/png/introduce.png';

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <Slider />
            <div className='notice'>
                <text>공지사항</text>
            </div>
            <Notice noticeName="[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전" />
            <Notice noticeName="2024학년도 동계 단기연수 프로그램 설명회 개최 안내" />
            <Notice noticeName="[연산지원팀] 2024학년도 동계 학부생 연구 참여 프로그램..." />
            <Notice noticeName="[교양 교학팀] 2024-2 글로벌라운지 운영 안내" />
            <Notice noticeName="2024학년도 2학기 제1차 성신 모의토익 접수 및 시행" />
            <Notice noticeName="[대학혁신(2024)] 2024학년도 동계학기 글로벌 인턴십" />
            <Notice noticeName="2024학년도 2학기 수강철회 시행 안내" />
            <img className='introduce' src={introduce} alt="introduce" /> 
        </div>
    )
}

export default Main
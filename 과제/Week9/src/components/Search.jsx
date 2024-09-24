import React, { useState, useRef } from 'react';
import Slider from './Section/Slider';
import LikeBox from './LikeBox';
import SearchImg from '../assets/img/icon/search.svg';
import { Map } from 'react-kakao-maps-sdk';

const Search = () => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const modalRef = useRef();

    const toggleBottomSheet = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsBottomSheetOpen(false);
        }
    };

    return (
        <div className='Search_wrap container'>
            <Slider />
            <div className='search_box'>
                <input type='text' placeholder='장소를 검색해주세요!' />
                <img className='search' src={SearchImg} alt="search" />
            </div>
            <div className='map_box'>
                <Map className='map' center={{ lat: 33.450701, lng: 126.570667 }} level={3} />
                <button onClick={toggleBottomSheet} className='open-bottom-sheet-btn'>
                        목록 보기
                </button>
            </div>


            {isBottomSheetOpen && (
                <div className="modal-overlay" onClick={toggleBottomSheet}>
                    <div className={`modal ${isBottomSheetOpen ? 'active' : ''}`} ref={modalRef}>
                        <div className='modal_text'>"성신여대" 주변에 있는 곳</div>
                        <LikeBox placeName="김태완스시 성신여대" />
                        <LikeBox placeName="다이소 성신여대역점" />
                        <LikeBox placeName="대한맥주집 성신여대본점" />
                        <LikeBox placeName="올리브영 성신여대입구역점" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
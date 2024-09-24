import React from 'react'
import Arrow from '../assets/img/icon/arrowright.svg';

const Notice = ({ noticeName }) => {
    return (
        <div className='notice_box'>
            <span className='notice_text'>{noticeName}</span>
            <img className='arrow' src={Arrow} alt="arrow" /> 
        </div>
    )
}

export default Notice
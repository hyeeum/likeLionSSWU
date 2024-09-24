import React from 'react'
import Like from '../assets/img/icon/like.svg';
  
const LikeBox = ({ placeName }) => {
    return (
        <div className='like_box'>
            <text>{placeName}</text>
            <img className='like' src={Like} alt="like" /> 
        </div>
    )
}

export default LikeBox
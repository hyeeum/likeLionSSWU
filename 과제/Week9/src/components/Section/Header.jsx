import React from 'react'
import Logowhite from '../../assets/img/icon/Logowhite.svg';

const Header = () => {
    return (
        <div className='logo'>
            <img className='logo_image' src={Logowhite} alt="Logo" />
        </div>
    )
}

export default Header
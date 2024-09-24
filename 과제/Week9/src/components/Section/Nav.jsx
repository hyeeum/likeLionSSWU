import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Home from '../../assets/img/icon/home.svg';
import Homefull from '../../assets/img/icon/homefull.svg';
import Like from '../../assets/img/icon/like.svg';
import Likefull from '../../assets/img/icon/likefull.svg';
import Search from '../../assets/img/icon/search.svg';
import Searchfull from '../../assets/img/icon/searchfull.svg';
import Mypage from '../../assets/img/icon/mypage.svg';
import Mypagefull from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const [selectedNav, setSelectedNav] = useState('home');

    const handleNavClick = (nav) => {
        setSelectedNav(nav);
    };

    return (
        <div className='nav_bar'>
            <Link to='/' onClick={() => handleNavClick('home')}>
                <img
                    className='nav'
                    src={selectedNav === 'home' ? Homefull : Home}
                    alt="Home"
                />
            </Link>
            <Link to='/like' onClick={() => handleNavClick('like')}>
                <img
                    className='nav'
                    src={selectedNav === 'like' ? Likefull : Like}
                    alt="Like"
                />
            </Link>
            <Link to='/search' onClick={() => handleNavClick('search')}>
                <img
                    className='nav'
                    src={selectedNav === 'search' ? Searchfull : Search}
                    alt="Search"
                />
            </Link>
            <Link to='/mypage' onClick={() => handleNavClick('mypage')}>
                <img
                    className='nav'
                    src={selectedNav === 'mypage' ? Mypagefull : Mypage}
                    alt="Mypage"
                />
            </Link>
        </div>
    );
};

export default Nav;

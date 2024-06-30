import React from 'react';
import '../assets/scss/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDlfNDQg%2FMDAxNTg5MDE0MTAwNzI2.p2sndicaoMh5M1b_eQrqc3QIyfjg23wgKi5MQJh8hhIg.M0T8slBJJqYzjjrCCgXCD8sA7o1b_3w99Tk3RirrmI8g.PNG.kueric12%2FFila-Logo.png&type=sc960_832" alt="FILA Logo" />
            </a>
            <ul>
                <li>
                    <a href="#women">WOMEN</a>
                    <div className="dropdown">
                        <a href="#WOMEN">WOMEN</a>
                        <a href="#WOMEN">WOMEN</a>
                    </div>
                </li>
                <li>
                    <a href="#men">MEN</a>
                    <div className="dropdown">
                        <a href="#MEN">MEN</a>
                        <a href="#MEN">MEN</a>
                    </div>
                </li>
                <li>
                    <a href="#kids">KIDS</a>
                    <div className="dropdown">
                        <a href="#KIDS">KIDS</a>
                        <a href="#KIDS">KIDS</a>
                    </div>
                </li>
                <li>
                    <a href="#tennis">TENNIS</a>
                    <div className="dropdown">
                        <a href="#TENNIS">TENNIS</a>
                        <a href="#TENNIS">TENNIS</a>
                    </div>
                </li>
                <li>
                    <a href="#brand">BRAND</a>
                    <div className="dropdown">
                        <a href="#BRAND">BRAND</a>
                        <a href="#BRAND">BRAND</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

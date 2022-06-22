import React, { useEffect } from 'react';
import './Navbar.css'
import logo from '../../images/resources/icare.png';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { GoMailRead } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.stricked-menu');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('stricky-fixed') : header.classList.remove('stricky-fixed');
    };
    return (
        <div className="page-wrapper">
            <header class="main-header-two clearfix">
                <div class="main-header-two__top">
                    <div class="container">
                        <div class="main-header-two__top-inner">
                            {/* <div class="main-header-two__top-left">
                                <p class="main-header-two__top-left-text">We provide complete home renovation services. </p>
                            </div> */}
                            <div class="main-header-two__top-right">
                                <div class="main-header-two__top-social">
                                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-header-two__middle">
                    <div class="container">
                        <div class="main-header-two__middle-inner clearfix">
                            <div class="main-header-two__shape-1"></div>
                            <div class="main-header-two__shape-2"></div>
                            <div class="main-header-two__shape-3"></div>
                            <div class="main-header-two__shape-4"></div>
                            <div class="main-header-two__shape-5"></div>
                            <div class="main-header-two__shape-6"></div>
                            <div class="main-header-two__shape-7"></div>
                            <div class="main-header-two__logo">
                                <a href="index.html"><img src={logo} alt="" /></a>
                            </div>
                            <div class="main-header-two__address">
                                <ul class="list-unstyled main-header-two__address-list">
                                    <li>
                                        <div class="icon">
                                            <span class="icon-phone-call"></span>
                                        </div>
                                        <div class="content">
                                            <p>Call Anytime</p>
                                            <h5><a href="tel:9200368090">+92 (003) 68-090</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-message"></span>
                                        </div>
                                        <div class="content">
                                            <p>Send Email</p>
                                            <h5><a href="mailto:needhelp@company.com">needhelp@company.com</a></h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-location"></span>
                                        </div>
                                        <div class="content">
                                            <p>380 St Kilda Road</p>
                                            <h5>Melbourne, Australia</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="main-menu main-menu-two clearfix">
                    <div class="main-menu-two__wrapper clearfix">
                        <div class="container">
                            <div class="main-menu-two__wrapper-inner clearfix">
                                <div class="main-menu-two__wrapper-inner-bg"></div>
                                <div class="main-menu-two__left">
                                    <div class="main-menu-two__main-menu-box">
                                        <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                                        <ul class="main-menu__list">
                                            <li class="dropdown current megamenu">
                                                <a href="index.html">Home </a>

                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>


                                            <li>
                                                <a href="contact.html">Contact </a>
                                            </li>

                                            <li>
                                                <a href="contact.html">Contact </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="main-menu-two__right">
                                    <div class="main-menu-two__search-box">
                                        <a href="#" class="main-menu-two__search search-toggler icon-magnifying-glass"></a>
                                    </div>
                                    <div class="main-menu-two__btn-box">
                                        <a href="contact.html" class="thm-btn main-menu-two__btn"> <i class="fa fa-arrow-right"></i> Free estimate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
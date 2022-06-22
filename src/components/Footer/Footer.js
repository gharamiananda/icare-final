import React from 'react';

import { AiFillFacebook } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import siteFooterShape1 from '../../images/shapes/site-footer-shape-1.png'


const Footer = () => {
    return (
        <footer className="site-footer overflow-hidden">

            <div className="site-footer-shape-1">
                <img src={siteFooterShape1} alt="" />
            </div>
            <div className="container">
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__about-text-box">
                                    <p className="footer-widget__about-text">Indian Center for Advance - ment of Research and Education, Haldia (ICARE) set up in 1995, is a non-profit making voluntary organization</p>
                                </div>
                                <div className="site-footer__social">
                                    <a href="#"><AiFillFacebook /></a>
                                    <a href="#"><BsTwitter /></a>
                                    <a href="#"><AiFillLinkedin /></a>
                                    <a href="#"><AiFillYoutube /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__explore clearfix">
                                <h3 className="footer-widget__title">Useful Links</h3>
                                <ul className="footer-widget__explore-list list-unstyled clearfix">
                                    <li><a href="about-us.html">About ICARE</a></li>
                                    <li><a href="#">Colleges</a></li>
                                    <li><a href="courses.html">Courses</a></li>
                                    <li><a href="academics.html">Academics</a></li>
                                    <li><a href="admission.html">Admission</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__newsletter clearfix">
                                <h3 className="footer-widget__title">Newsletter</h3>
                                <p className="footer-widget__newsletter-text">Subscribe to our newsletter and get update in your inbox.</p>
                                <form className="footer-widget__newsletter-form">
                                    <div className="footer-widget__newsletter-input-box">
                                        <input type="email" placeholder="Enter Email Address" name="email" />
                                        <button type="submit" className="footer-widget__newsletter-btn thm-btn"> <i><AiOutlineArrowRight /></i> Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__column footer-widget__contact">
                                <h3 className="footer-widget__title">Contact</h3>
                                <p className="footer-widget__contact-text">ICARE Complex, HIT Campus, P.O.-Hatiberia, Haldia</p>
                                <ul className="list-unstyled footer-widget__contact-list">

                                    <li>
                                        <div className="icon">
                                            <i> <FaPhoneAlt /></i>
                                        </div>
                                        <div className="text">
                                            <p><a href="tel:+91(03224) 255275">+91(03224) 255275</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">&copy; 2022 Copyright ICARE. All Rights Reserved || design & developed by <a href="https://devantitsolutions.com/">DITS</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import InnerBanner from '../../components/InnerBanner';
import Certificate from '../Homepage/Certificate/Certificate';
import Testimonial from '../Homepage/Testimonial/Testimonial';

import sectionTitleShape1 from '../../images/shapes/section-title-shape-1.png'
import admission from '../../images/resources/admision.jpg'
import admission1 from '../../images/resources/admision1.jpg'
import aboutTwoLine from '../../images/shapes/about-two-line.png'
import aboutTwoPracticeYearShape from '../../images/shapes/about-two-practice-year-shape.png'

const Admission = () => {
    return (
        <div>
            <InnerBanner title='Our Admission'></InnerBanner>

            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__left">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">Admission</p>
                                        <div className="section-title-shape-1">
                                            <img src={sectionTitleShape1} alt="" />
                                        </div>
                                    </div>
                                    <h2 className="section-title__title">We’re committed to education exellence</h2>
                                </div>
                                <ul className="list-unstyled about-three__point">
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>Admission process to be published soon.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="text">
                                            <p>You can download our brochure and form for respective colleges</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two__right">
                                <div className="about-two__img-box wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-two__img">
                                        <img src={admission} alt="" />
                                    </div>
                                    <div className="about-two__img-two">
                                        <img src={admission1} alt="" />
                                    </div>
                                    <div className="about-two__line">
                                        <img src={aboutTwoLine} alt="" />
                                    </div>
                                    <div className="about-two__shape-1"></div>
                                    <div className="about-two__practice-year">
                                        <div className="about-two__practice-year-inner">
                                            <div className="about-two__practice-year-shape">
                                                <img src={aboutTwoPracticeYearShape} alt="" />
                                            </div>
                                            <div className="about-two__practice-year-content">
                                                <h3>20</h3>
                                                <p>Years of <br /> experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial></Testimonial>
            <Certificate></Certificate>
        </div>
    );
};

export default Admission;
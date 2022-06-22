import React from 'react';
import InnerBanner from '../../components/InnerBanner';

import sectionTitleShape1 from '../../images/shapes/section-title-shape-1.png'
import Certificate from '../Homepage/Certificate/Certificate';
import Testimonial from '../Homepage/Testimonial/Testimonial';

const Academics = () => {
    return (
        <div>
            <InnerBanner title='Our Academics'></InnerBanner>


            {/* <!-- ==================================academics start==================================== --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 iacdemics_outsection">
                        <div className="section-title text-left">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title">Academics</p>
                                <div className="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="icareinner_abouttext">
                            <b>
                                Studying at Indian Center For Advancement of Research And Education
                            </b>
                        </p>
                        <p className="icareinner_abouttext">
                            Indian Center For Advancement of Research And Education offers students the benefit of a thriving educational environment set in the heart of the most happening Industrial Area of West Bengal.
                        </p>

                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">UG PROGRAMMES</p>
                                        <div className="section-title-shape-1">
                                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Bio-Technology
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Chemical Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Computer Science & Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>120
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Electronics & Communication Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>120
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Electronics & Instrumentation Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Electrical Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Information Technology
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Mechanical Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Food Technology
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Civil Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Production Engineering
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>40
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        B.Sc (Nautical Science)
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        B.Sc (Nautical Science)
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        BCA Course
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">PG PROGRAMMES</p>
                                        <div className="section-title-shape-1">
                                            <img src={sectionTitleShape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        MBA Course
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        M.Tech(CSE, ME, CHE, BT & ECE)  18 (Each)
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        MCA Course
                                        <span className="bsdiconx">
                                            <i className="fa fa-arrow-right icvnxc"></i>60
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 academicsiolist_outsection">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">FINANCIAL AIDS </p>
                                        <div className="section-title-shape-1">
                                            <img src={sectionTitleShape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="mvlstarea1">
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Free Studentship
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Half-free Studentship
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Scholarship from Important Trust/Fund
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Facility from Nationalized Bank for needy students
                                    </li>
                                    <li>
                                        <span className="icon-confirmation urighticn"></span>
                                        Railway Travel Concession.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ==================================academics end====================================== --> */}

            <Testimonial></Testimonial>
            <Certificate></Certificate>
        </div>
    );
};

export default Academics;
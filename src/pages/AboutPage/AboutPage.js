import React from 'react';

// import FeatureTop from '../HomePage/FeatureTop/FeatureTop';
// import ProjectOne from '../HomePage/ProjectOne/ProjectOne';
// import Testimonial from '../HomePage/Testimonial/Testimonial';
import main1 from '../../images/backgrounds/main1.jpg'
import aboutOneShape from '../../images/shapes/about-one-shape.png'
import sectionTitleShape1 from '../../images/shapes/section-title-shape-1.png'
import iabout1 from '../../images/resources/iabout1.jpg'
import aboutOneLine from '../../images/shapes/about-one-line.png'
import aboutOneSatisfiedShape1 from '../../images/shapes/about-one-satisfied-shape-1.png'
import InnerBanner from '../../components/InnerBanner';
import Testimonial from '../Homepage/Testimonial/Testimonial';
import Certificate from '../Homepage/Certificate/Certificate';
// import InnerBanner from '../../components/InnerBanner';
// import InnerBanner  from '../../c'
// import Certificate from '../Homepage/Certificate/Certificate';


const AboutPage = () => {
    return (
        <div>
            <InnerBanner title='About Us'></InnerBanner>

            {/* <!--About One Start--> */}
            <section className="about-one inneraboutarea overflow-hidden">
                <div className="about-one__shape float-bob-x">
                    <img src={aboutOneShape} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__left">
                                <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="about-one__img">
                                        <img src={iabout1} alt="" />
                                    </div>
                                    <div className="about-one__line">
                                        <img src={aboutOneLine} alt="" />
                                    </div>
                                    <div className="about-one__satisfied">
                                        <div className="about-one__satisfied-inner">
                                            <div className="about-one__satisfied-shape">
                                                <img src={aboutOneSatisfiedShape1} alt=" " />
                                            </div>
                                            <div className="about-one__satisfied-content">
                                                <div className="about-one__satisfied-count-box">
                                                    <h3 className="odometer" data-count="98">00</h3>
                                                    <span className="about-one__satisfied-percent">%</span>
                                                </div>
                                                <p className="about-one__satisfied-text">Satisfied Students</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-one__big-text">icare</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-one__right">
                                <div className="section-title text-left">
                                    <div className="section-sub-title-box">
                                        <p className="section-sub-title">About US</p>
                                        <div className="section-title-shape-1">
                                            <img src={sectionTitleShape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p className="icareinner_abouttext">
                                    <b>
                                        Indian Centre for Advancement of Research and Education, Haldia (ICARE)
                                    </b>
                                    et up in 1995, is a non-profit making voluntary organisation registered under Societies Registration Act 1961. ICARE is dedicated to promote, establish, run & maintain educational institutions of excellence to keep pace with the rapid industrial development in this region. This society is managed by a Board of Governors comprising of eminent personalities who are great visionaries.
                                </p>
                                <p className="icareinner_abouttext">
                                    Thesociety aims at creating a modern education centre of excellence in Haldia, provide value based education of international standards and with a motto to march ahead to build an ideally developed Haldia.
                                </p>
                                <p className="icareinner_abouttext">
                                    In view of the noble objectives of the society, it gets support from the local Municipal authorities, Haldia Development authority as well as from the industrial and business houses in and around Haldia. Donations to ICARE shall qualify for Tax deduction U/S 80 G of Income Tax, 1961.
                                </p>
                                <div className="yl-about-qoute">
                                    <span>"A University needs to be a centre of excellence
                                        for pursuit of knowledge."</span>
                                    <div className="yl-quote-author yl-headline">
                                        <h4><a href="#">Mr Lakshman Seth</a></h4>
                                        <span>Chairman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--About One End--> */}
            {/* <!-- ===============mission & vision======================== --> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 vismison_outsection">
                        <div className="section-title text-left">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title">Mission</p>
                                <div className="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="icareinner_abouttext">
                            To establish and run institutions of higher education in engineering, technology, management, paramedical, medical and other professional courses with the aim of making the Haldia a center for education and training to enable the students to pursue careers of their choice and to obviate the need to travel long distances for fulfilling their aspirations and to enable them to meet the challenge of globalization by fully utilizing the facilities created by ICARE as a gateway to a bright future.
                        </p>
                        <ul className="mvlstarea">
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                            <li>
                                <span className="icon-confirmation"></span>
                                To develop world class infrastructural facilities in the education sector to supplement existing infrastructure for facilitating rapid industrial development of the region.
                            </li>
                        </ul>
                        <div className="section-title text-left">
                            <div className="section-sub-title-box">
                                <p className="section-sub-title">Vision</p>
                                <div className="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="icareinner_abouttext">
                            To be a leading organization for providing education in the fields of technology, management, medical, paramedical science etc., for the socio-economic development of the region creating centers of excellence in education so as to provide value based education of international standards to all segments of society and to stand by the weaker segments of society.
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- ===============mission & vision======================== --> */}
            <Testimonial />
            <Certificate />
        </div>
    );
};

export default AboutPage;
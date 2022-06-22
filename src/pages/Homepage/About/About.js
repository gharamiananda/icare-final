import React, { useEffect, useState } from 'react';
import aboutLine from '../../../images/shapes/about-one-line.png'
import iabout1 from '../../../images/resources/iabout1.jpg'
import aboutOneSatisfied from '../../../images/shapes/about-one-satisfied-shape-1.png'
import sectionTitleShape1 from '../../../images/shapes/section-title-shape-1.png'
import aboutOneShape from '../../../images/shapes/about-one-shape.png';
// import './About.css';
// import AnimatedNumber from 'react-animated-number';


const About = () => {


    const [about, setAbout] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/about_home')
            .then(res => res.json())
            .then(data => setAbout(data));
    }, [])


    console.log(about)

    // }, []);
    return (
        <section class="about-one">
            <div class="about-one__shape float-bob-x">
                <img src={aboutOneShape} alt="" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="about-one__left">
                            <div class="about-one__img-box wow slideInLeft animated" data-wow-delay="100ms" data-wow-duration="2500ms" style={{ visibility: ' visible', animationDuration: '2500ms', animationDelay: "100ms", animationName: "slideInLeft" }}>
                                <div class="about-one__img">
                                    <img src={iabout1} alt="" />
                                </div>
                                <div class="about-one__line">
                                    <img src={aboutLine} alt="" />
                                </div>
                                <div class="about-one__satisfied">
                                    <div class="about-one__satisfied-inner">
                                        <div class="about-one__satisfied-shape">
                                            <img src={aboutOneSatisfied} alt="" />
                                        </div>
                                        <div class="about-one__satisfied-content">
                                            <div class="about-one__satisfied-count-box">
                                                <h3 class="odometer odometer-auto-theme" data-count="98"><div class="odometer-inside"><span class="odometer-digit">


                                                    <span class="odometer-digit-spacer">88</span></span></div></h3>
                                                <span class="about-one__satisfied-percent">%</span>
                                            </div>
                                            <p class="about-one__satisfied-text">Satisfied Students</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-one__big-text">icare</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="about-one__right">
                            <div class="section-title text-left">
                                <div class="section-sub-title-box">
                                    <p class="section-sub-title">About US</p>
                                    <div class="section-title-shape-1">
                                        <img src={sectionTitleShape1} alt="" />
                                    </div>
                                </div>
                                <h2 class="section-title__title">Indian Center for Advance - ment of Research and Education, Haldia (ICARE)</h2>
                            </div>
                            <p class="about-one__text">set up in 1995, is a non-profit making voluntary organization. ICARE is solely dedicated to promote, establish, run and maintain educational institutions of excellence</p>
                            <p class="about-one__text">for development of infrastructural facilities at Haldia in the field of education to keep pace with the rapid industrial development in this region.</p>
                            <div class="yl-about-qoute">
                                <span>"A University needs to be a centre of excellence
                                    for pursuit of knowledge."</span>
                                <div class="yl-quote-author yl-headline">
                                    <h4><a href="#">Mr Lakshman Seth</a></h4>
                                    <span>Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
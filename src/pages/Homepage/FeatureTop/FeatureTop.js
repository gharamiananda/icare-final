import React, { useEffect, useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import onedot from '../../../images/shapes/feature-one-dot.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'





const FeatureTop = () => {


    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feature_home')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])
    // console.log(features[0]);
    return (

        <section className="feature-one over-hidden ">
            <div className="container">
                <div className="feature-one__inner">
                    <div className="feature-one__dot">
                        <img src={onedot} alt="" />
                    </div>
                    <div className="row">
                        {/* {
                            features.map(feature =>

                                < div key={feature._id} className="col-xl-4 col-lg-4 wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: "visible", animationDelay: " 100ms", animationName: "fadeInUp" }}>
                                    <div className="feature-one__single">
                                        <div className="feature-one__top">
                                            <div className="feature-one__icon">
                                                <span className="icon-roof-5">
                                                    <i className={feature.fontlink}></i></span>
                                            </div>
                                            <div className="feature-one__title-box">
                                                <h3 className="feature-one__title"><a href="about.html">  {feature?.title?.split(" ")[0]} <br />  {feature.title.split(" ")[1]}</a></h3>
                                            </div>
                                        </div>
                                        <div className="feature-one__single-inner">
                                            <p className="feature-one__text">{feature.desc}</p>
                                            <div className="feature-one__read-more">
                                                <Link to={feature.link}>Read More  <i> <AiOutlineArrowRight /></i>  </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            )} */}


                        <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><i class="fas fa-rupee-sign uicondesign"></i></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="about.html">Affordable <br /> Tuition</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">Highly competitive rates yet, located in heart of the
                                        Nation's Capital.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More <i class="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><i class="fas fa-rupee-sign uicondesign"></i></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="about.html">Affordable <br /> Tuition</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">Highly competitive rates yet, located in heart of the
                                        Nation's Capital.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More <i class="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div class="feature-one__single">
                                <div class="feature-one__top">
                                    <div class="feature-one__icon">
                                        <span class="icon-roof-5"><i class="fas fa-rupee-sign uicondesign"></i></span>
                                    </div>
                                    <div class="feature-one__title-box">
                                        <h3 class="feature-one__title"><a href="about.html">Affordable <br /> Tuition</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="feature-one__single-inner">
                                    <p class="feature-one__text">Highly competitive rates yet, located in heart of the
                                        Nation's Capital.</p>
                                    <div class="feature-one__read-more">
                                        <a href="about.html">Read More <i class="fa fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    );
};

export default FeatureTop;
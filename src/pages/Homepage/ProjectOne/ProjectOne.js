import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import icareCourses1 from '../../../images/project/icare-courses1.jpg'
import icareCourses2 from '../../../images/project/icare-courses2.jpg'
import icareCourses3 from '../../../images/project/icare-courses3.jpg'
import icareCourses4 from '../../../images/project/icare-courses.jpg'
import './ProjectOne.css';
import { FiLink } from 'react-icons/fi';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ProjectOne = () => {
    return (
        <section className="project-one">
            <div className="project-one__top">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-sub-title-box">
                            <p className="section-sub-title">Courses Offered</p>
                            <div className="section-title-shape-1">
                                <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                            </div>
                        </div>
                        <h2 className="section-title__title">There are the following ten <br /> departments under faculties.</h2>
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="project-one__bottom-wrapper">


                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}

                        pagination={{ clickable: true }}
                        loop={true}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >

                        <SwiperSlide> <div className="item">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src={icareCourses1} alt="" />
                                    </div>
                                    <div className="project-one__content">
                                        <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div className="project-one__link">
                                        <a className="img-popup" href={{ icareCourses1 }}><FiLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src={icareCourses2} alt="" />
                                    </div>
                                    <div className="project-one__content">
                                        <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div className="project-one__link">
                                        <a className="img-popup" href={icareCourses2}><FiLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src={icareCourses3} alt="" />
                                    </div>
                                    <div className="project-one__content">
                                        <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div className="project-one__link">
                                        <a className="img-popup" href={icareCourses2}><FiLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className="item">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src={icareCourses4} alt="" />
                                    </div>
                                    <div className="project-one__content">
                                        <h4 className="project-one__title"><a href="work-details.html">BCA</a>
                                        </h4>
                                    </div>
                                    <div className="project-one__link">
                                        <a className="img-popup" href={icareCourses4}><FiLink /></a>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>



                    </Swiper>
                </div>
            </div >




        </section >
    );
};

export default ProjectOne;
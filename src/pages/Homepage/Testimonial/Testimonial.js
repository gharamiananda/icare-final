import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar } from 'react-icons/ai';
import student from '../../../images/testimonial/student.png';
import './Testimonial.css'



const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonial_home')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    console.log(testimonial)

    return (
        <section className="testimonial-one">
            <div className="testimonial-one-shape" style={{ backgroundimage: 'url(assets/images/shapes/testimonial-one-shape-dark.png)' }}></div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">testimonials</p>
                        <div className="section-title-shape-1">
                            <img src="assets/images/shapes/section-title-shape-1.png" alt="" />
                        </div>
                    </div>
                    <h2 className="section-title__title">What they’re talking <br /> about us</h2>
                </div>



                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}


                    pagination
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                >


                    {
                        testimonial.map(t => <SwiperSlide>
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__client-img-box">
                                            <div className="testimonial-one__client-img">
                                                <img src={student} alt="" />
                                            </div>
                                        </div>
                                        <div className="testimonial-one__client-details">
                                            <h4 className="testimonial-one__client-name fedbacknamedesign">{t.username}</h4>
                                            <p className="testimonial-one__client-sub-title">Student</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-one__text fedbackdescritiontext">{t.desc}</p>
                                    <div className="testimonial-one__rating">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }





                </Swiper>



            </div>
        </section>
    );
};

export default Testimonial;
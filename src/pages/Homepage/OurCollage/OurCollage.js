import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import clg1 from '../../../images/services/clg1.jpg'
import clg2 from '../../../images/services/clg2.jpg'
import clg3 from '../../../images/services/clg3.jpg'
import clg4 from '../../../images/services/clg4.jpg'
import sectionTitleShape1 from '../../../images/shapes/section-title-shape-1.png'
import './OurCollage.css';
import { FaUniversity } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';





const OurCollage = () => {

    const [collages, setCollages] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/collage_home')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, []);
    console.log(collages)

    return (

        <div className="container overflow-hidden ">
            <section className="services-carousel-page">
                <div className="section-title text-center">
                    <div className="section-sub-title-box">
                        <p className="section-sub-title">Our Colleges</p>
                        <div className="section-title-shape-1">
                            <img src={sectionTitleShape1} alt="" />
                        </div>
                    </div>
                </div>




                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}

                    pagination={{ clickable: true }}
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}






                    loop={true}

                >

                    {
                        collages.map(collage => <SwiperSlide
                            key={collage._id}
                        >
                            <div className="item">
                                <div className="services-one__single">
                                    <div className="services-one__img">
                                        <img src={collage.image} alt="" />
                                    </div>
                                    <div className="services-one__content">
                                        <div className="services-one__icon">
                                            <span><FaUniversity /></span>
                                        </div>
                                        <h3 className="services-one__title"><a href="#">{collage.collageName}</a></h3>
                                        <p className="services-one__text clgdescription">{collage.collageDesc}</p>
                                        <div className="services-one__read-more">
                                            <a href={collage.collageLink}>Read More<i> <AiOutlineArrowRight /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }





                </Swiper>



            </section>
        </div>
    );
};

export default OurCollage;

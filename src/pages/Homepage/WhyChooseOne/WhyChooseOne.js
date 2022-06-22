import React from 'react';
import whyChooseTwoBg from '../../../images/backgrounds/why-choose-two-bg.jpg'
import sectionTitleShape1 from '../../../images/shapes/section-title-shape-1.png'
import whyChooseHaldiacollege from '../../../images/resources/why-choose-haldiacollege.jpg';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';


const WhyChooseOne = () => {
    return (

        <section class="why-choose-two">
            <div class="why-choose-two-bg"
                style={{ backgroundImage: `url(${whyChooseTwoBg})` }}></div>
            <div class="container">
                <div class="section-title text-center">
                    <div class="section-sub-title-box">
                        <p class="section-sub-title">why choose us</p>
                        <div class="section-title-shape-1">
                            <img src={sectionTitleShape1} alt="" />
                        </div>
                    </div>
                    <h2 class="section-title__title reshead">Few reasons to choose <br /> our college</h2>
                </div>
                <div class="row">
                    <div class="col-xl-4">
                        <div class="why-choose-two__left">
                            <ul class="list-unstyled why-choose-two__list-one">
                                <li>
                                    <div class="icon">
                                        <span class=""><FaChalkboardTeacher /></span>
                                    </div>
                                    <div class="content">
                                        <h4>Experienced Faculty</h4>

                                    </div>
                                </li>
                                <li class="qedusection">
                                    <div class="icon">
                                        <span class=""><FaUniversity /></span>
                                    </div>
                                    <div class="content">
                                        <h4>Quality Education</h4>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="why-choose-two__middle">
                            <div class="why-choose-two__img-box">
                                <div class="why-choose-two__img-one">
                                    <img src={whyChooseHaldiacollege} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="why-choose-two__right">
                            <ul class="list-unstyled why-choose-two__list-two clearfix">
                                <li class="clearfix">
                                    <div class="content">
                                        <h4>22 Colleges</h4>

                                    </div>
                                    <div class="icon">
                                        <span class=""><BsFillJournalBookmarkFill /></span>
                                    </div>
                                </li>
                                <li class="clearfix">
                                    <div class="content">
                                        <h4>Job Guarantee</h4>

                                    </div>
                                    <div class="icon">
                                        <span class=""><BiBriefcaseAlt2 /></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyChooseOne;
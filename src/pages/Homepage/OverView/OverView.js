import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
import overviewBack from '../../../images/backgrounds/overview-back.jpg'
import sectionTitleShape1 from '../../../images/shapes/section-title-shape-1.png';
import './OverView.css'



const OverView = () => {


    const [overview, setOverview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/overview_home')
            .then(res => res.json())
            .then(data => setOverview(data))
    }, []);

    const over = overview.map(t => (t.overview_text));
    over.map(text => console.log(text[0]['text_overview']));

    return (
        <section class="trust-company">
            <div class="trust-company-shape-1">
                <img src="assets/images/shapes/traust-company-shape-11.png" alt="" />
            </div>
            <div class="trust-company-shape-2"></div>
            <div class="trust-company-shape-3"></div>
            <div class="trust-company-shape-4"></div>
            <div class="trust-company-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{ backgroundImage: `url(${overviewBack})` }}></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="trust-company__left">
                            <div class="trust-company__video-link">
                                <a href="#" class="video-popup">
                                    <div class="trust-company__video-icon">
                                        <span class="fa fa-play"></span>
                                        <i class="ripple">  </i>
                                    </div>
                                </a>
                            </div>
                            <div class="section-sub-title-box newovrviewdesign">
                                <p class="section-sub-title">Overview</p>
                                <div class="section-title-shape-1">
                                    <img src={sectionTitleShape1} alt="" />
                                </div>
                            </div>
                            <h2 class="trust-company__title">Welcome to the Icare Online Registration Portal.</h2>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="trust-company__right">
                            <ul class="list-unstyled trust-compay__points">
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">IGNOU Study Centre @ ICARE</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Career@ICARE</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Campus Tour</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Videos & Audio</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span>  
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">MNGO & Social Welfare</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Tenders</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Research and Development Centre</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-tick"></span> 
                                    </div>
                                    <div class="text">
                                        <p><a href="#" class="obrviewlnk">Central Tool Room & Testing Laboratories</a></p>
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

export default OverView;
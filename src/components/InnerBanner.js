import React from 'react';
import main1 from '../images/backgrounds/main1.jpg'
import { useLocation } from 'react-router-dom';



const InnerBanner = (props) => {
    const location = useLocation();

    console.log(props.title)


    const breadcum = location?.pathname.split('/')[1]

    return (
        <div>
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: ` url(${main1})` }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li>{breadcum}</li>
                        </ul>
                        <h2>  {props.title}</h2>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default InnerBanner;
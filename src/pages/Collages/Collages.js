import React from 'react';
import { useLocation } from 'react-router-dom';
import InnerBanner from '../../components/InnerBanner';
import Certificate from '../Homepage/Certificate/Certificate';
import OurCollage from '../Homepage/OurCollage/OurCollage';
import Testimonial from '../Homepage/Testimonial/Testimonial';
// import InnerBanner from '../../components/InnerBanner';



const Collages = () => {

    const location = useLocation();

    console.log(location, typeof location?.pathname)

    return (
        <div>
            <InnerBanner title='Our Collages'></InnerBanner>

            <OurCollage></OurCollage>
            <Testimonial></Testimonial>
            <Certificate />

        </div>
    );
};

export default Collages;
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Certificate from '../Certificate/Certificate';
import FeatureTop from '../FeatureTop/FeatureTop';
import OurCollage from '../OurCollage/OurCollage';
import OverView from '../OverView/OverView';
import ProjectOne from '../ProjectOne/ProjectOne';
import Testimonial from '../Testimonial/Testimonial';
import WhyChooseOne from '../WhyChooseOne/WhyChooseOne';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureTop></FeatureTop>
            <About></About>
            <WhyChooseOne />
            <ProjectOne />
            <OverView />
            <OurCollage></OurCollage>
            <Testimonial />
            <Certificate />
        </div>
    );
};

export default Home;
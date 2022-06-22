import React from 'react';

import InnerBanner from '../../components/InnerBanner';
import Certificate from '../Homepage/Certificate/Certificate';
import ProjectOne from '../Homepage/ProjectOne/ProjectOne';
import Testimonial from '../Homepage/Testimonial/Testimonial';


const Courses = () => {
    return (
        <div>
            <InnerBanner title='Our Courses'></InnerBanner>

            <ProjectOne></ProjectOne>
            <Testimonial />
            <Certificate />
        </div>
    );
};

export default Courses;
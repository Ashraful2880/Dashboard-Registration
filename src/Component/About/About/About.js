import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutHome from '../AboutHome/AboutHome';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import Faq from './../Faq/Faq';
import Partners from './../Partners/Partners';

const About = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<AboutHome />} />
                <Route path='team' element={<Team />} />
                <Route path='testimonial' element={<Testimonial />} />
                <Route path='partners' element={<Partners />} />
                <Route path='faq' element={<Faq />} />
            </Routes>
        </>
    );
};

export default About;
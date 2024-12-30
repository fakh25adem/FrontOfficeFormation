import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Course from './section-components/course-page';
import Footer from './global-components/footer';
import { Link } from 'react-router-dom';
const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses"  />
        <Course />
        <Footer />
    </div>
}

export default AboutPage


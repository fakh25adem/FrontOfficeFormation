import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Projets et programmes de développement "  />
        <CourseDetails />
        <Footer />
        <Scrollp/>
        <div className="fixed-buttons">
            <button className="btn btn-primary"><p>Devenir formateur</p></button>
            <button className="btn btn-secondary"><p>Inscription en ligne</p></button>
        </div>
    </div>
}

export default AboutPage


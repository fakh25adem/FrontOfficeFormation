import React from 'react';
import Navbar from './global-components/navbar-v2';
import FormComponent from './global-components/FormComponent';
import InfoComponent from './global-components/InfoComponent';
import AboutV6 from './section-components/about-v6';
import InstructorPage from './section-components/instructor';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';


const Formation = () => {
    return <div >
        <Navbar />
        <div className="formation-container">
                <FormComponent />
                <InfoComponent />
            </div>
            <AboutV6 />
            <InstructorPage />

        <Footer />
        <Scrollp/>
        <div className="fixed-buttons">
            <button className="btn btn-primary">Devenir formateur</button>
            <button className="btn btn-secondary">Inscription en ligne</button>
        </div>
    </div>
}

export default Formation


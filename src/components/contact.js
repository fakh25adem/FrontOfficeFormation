import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import Footer from './global-components/footer-v2';
import Certifications from './section-components/certification';
import Scrollp from './Scroll-Parallax/scrollp';
import FormationCertification from './section-components/formation-certification';

const Contact = () => {
    return <div>
        <Navbar />
        <PageHeader3   />
        <Certifications />
        <FormationCertification />
        <Footer />
        <Scrollp/>
        <div className="fixed-buttons">
            <button className="btn btn-primary"><p>Devenir formateur</p></button>
            <button className="btn btn-secondary"><p>Inscription en ligne</p></button>
        </div>
    </div>
}

export default Contact


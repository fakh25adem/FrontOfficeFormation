import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import Footer from './global-components/footer-v2';
import Certifications from './section-components/certification';
import Scrollp from './Scroll-Parallax/scrollp';
import FormationCertification from './section-components/formation-certification';
import { Link } from 'react-router-dom';
const Contact = () => {
    return <div>
        <Navbar />
        <PageHeader3   headertitle="Certification"/>
        <Certifications />
        <FormationCertification />
        <Footer />
        <Scrollp/>
        <div className="fixed-buttons">
        <Link to="/Formateur">
            <button className="btn btn-primary">Devenir formateur</button>
            </Link>            
            <Link to="/InscriptionEnLigne" >         
            <button className="btn btn-secondary">Inscription en ligne</button>
            </Link>          </div>
    </div>
}

export default Contact


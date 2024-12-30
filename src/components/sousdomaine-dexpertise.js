import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import BlocSousDomaine from './global-components/bloc-sousdomaine';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import Page_header4 from './global-components/page-header4';
import { Link } from 'react-router-dom';
const AboutPage = () => {
    return <div>
        <Navbar />
        <Page_header4   />
        <BlocSousDomaine />
        <Footer />
        <Scrollp />
        <div className="fixed-buttons">
        <Link to="/Formateur">
            <button className="btn btn-primary">Devenir formateur</button>
            </Link>            
            <Link to="/InscriptionEnLigne" >         
            <button className="btn btn-secondary">Inscription en ligne</button>
            </Link>        </div>
    </div>
}

export default AboutPage
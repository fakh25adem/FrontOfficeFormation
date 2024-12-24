import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import BlocSousDomaine from './global-components/bloc-sousdomaine';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import Page_header4 from './global-components/page-header4';

const AboutPage = () => {
    return <div>
        <Navbar />
        <Page_header4   />
        <BlocSousDomaine />
        <Footer />
        <Scrollp />
        <div className="fixed-buttons">
            <button className="btn btn-primary">Devenir formateur</button>
            <button className="btn btn-secondary">Inscription en ligne</button>
        </div>
    </div>
}

export default AboutPage
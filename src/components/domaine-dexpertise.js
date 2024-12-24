import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import BlocDomaine from './global-components/bloc-domaine';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader3 headertitle="Domaines D'expertise"  />
        <BlocDomaine />
        <Footer />
        <Scrollp />
        <div className="fixed-buttons">
            <button className="btn btn-primary">Devenir formateur</button>
            <button className="btn btn-secondary">Inscription en ligne</button>
        </div>
    </div>
}

export default AboutPage
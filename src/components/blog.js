import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header4';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import Consulting from './consulting';
const SingUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader />
        <Consulting />
        <Footer />
        <Scrollp />
        <div className="fixed-buttons">
            <button className="btn btn-primary">Devenir formateur</button>
            <button className="btn btn-secondary">Inscription en ligne</button>
        </div>
    </div>
}

export default SingUpPage


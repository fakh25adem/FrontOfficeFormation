import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import Consulting from './consulting';
import { Link } from 'react-router-dom';
const SingUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader3   headertitle="Consulting"/>
        <Consulting />
        <Footer />
        <Scrollp />
        <div className="fixed-buttons">
        <Link to="/Formateur">
            <button className="btn btn-primary">Devenir formateur</button>
            </Link>            
            <Link to="/InscriptionEnLigne" >         
            <button className="btn btn-secondary">Inscription en ligne</button>
            </Link>          </div>
    </div>
}

export default SingUpPage


import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader3 from './global-components/page-header3';
import BlocDomaine from './global-components/bloc-domaine';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import { Link } from 'react-router-dom';
import FormFormateur from './global-components/form-formateur';

const Formateur = () => {
    return <div>
        <Navbar />
        <PageHeader3 headertitle="Espace Formateur"  />
        <FormFormateur />
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

export default Formateur;
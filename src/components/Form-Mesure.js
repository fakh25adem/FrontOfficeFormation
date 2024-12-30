import React, { useState } from 'react';
import Navbar from './global-components/navbar-v2';
import FormSurMesur from './global-components/formSurMesur';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import PageHeader1 from './global-components/page-header1';
import { Link } from 'react-router-dom';

const FormMesur = () => {
   

    return (
        <div>
            <Navbar />
            <PageHeader1 headertitle="Nos formations sur mesure" />
            <FormSurMesur />
            <Footer />
            <Scrollp />
            <div className="fixed-buttons">
                <Link to="/Formateur">
                    <button className="btn btn-primary">Devenir formateur</button>
                </Link>
                <Link to="/InscriptionEnLigne" >         
            <button className="btn btn-secondary">Inscription en ligne</button>
            </Link>  
            </div>

            
        </div>
    );
};

export default FormMesur;

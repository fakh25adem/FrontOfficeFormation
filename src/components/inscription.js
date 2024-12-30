import React from 'react';
import Navbar from './global-components/navbar-v2';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import FormulaireInscrit from './global-components/formulaire-inscrit';
import { Link } from 'react-router-dom';
const Inscription = () => {
    return <div>
        <Navbar />
        <FormulaireInscrit/>
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
export default Inscription


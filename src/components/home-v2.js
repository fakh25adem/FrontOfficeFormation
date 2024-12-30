import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import Intro from './section-components/intro-v2';
import About from './section-components/about-v2';
import Client from './section-components/client';
import HowToWork from './section-components/how-to-work';
import Temoignages from './section-components/temoignages';
import PageHeader2 from './global-components/page-header2';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import FormulaireInscriptionEnLigne from './global-components/formulaire-inscritenligne'; // Import du formulaire

const Home_V2 = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false); // État pour afficher ou masquer le popup

    const handleOpenPopup = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            <Navbar />
            <Banner />
            <Intro />
            <About />
            <Temoignages />
            <Client />
            <HowToWork />
            <PageHeader2 />
            <Footer />
            <Scrollp />

            {/* Boutons fixes */}
            <div className="fixed-buttons">
                <Link to="/Formateur">
                    <button className="btn btn-primary">Devenir formateur</button>
                </Link>
                <button
                    onClick={handleOpenPopup} // Affiche le popup
                    className="btn btn-secondary"
                >
                    Inscription en ligne
                </button>
            </div>

            {/* Popup */}
            {isPopupVisible && (
               <div className="popup-overlay ">
               <div className="popup-content ">
                   {/* Formulaire d'inscription */}
                   <FormulaireInscriptionEnLigne />
                   <button
                       onClick={handleClosePopup}
                       className="popup-close-button">
                       ✕
                   </button>
               </div>
           </div>
            )}
        </div>
    );
};

export default Home_V2;

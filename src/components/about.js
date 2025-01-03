import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './global-components/navbar-v2';
import Intro from './section-components/intro-v2';
import Modeformation from './section-components/mode-formation';
import Client from './section-components/client';
import Temoignages from './section-components/temoignages';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import FormulaireInscriptionEnLigne from './global-components/formulaire-inscritenligne'; // Import du formulaire
import PhotoNavigation from './section-components/photonavigation';
import ExifodSection from './section-components/exifodsection';
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
            <Intro  />
            <Modeformation />
            <PhotoNavigation />
            <ExifodSection />
           
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

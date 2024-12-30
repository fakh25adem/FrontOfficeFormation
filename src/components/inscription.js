import React, {useState} from 'react';
import Navbar from './global-components/navbar-v2';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import FormulaireInscrit from './global-components/formulaire-inscrit';
import { Link } from 'react-router-dom';
import FormulaireInscriptionEnLigne from './global-components/formulaire-inscritenligne'; // Import du formulaire

const Inscription = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false); // État pour afficher ou masquer le popup

    const handleOpenPopup = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };
    return (  <div>
        <Navbar />
        <FormulaireInscrit/>
        <Footer />
        <Scrollp/>
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
export default Inscription


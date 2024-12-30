import React,{useState} from 'react';
import Navbar from './global-components/navbar-v2';
import FormComponent from './global-components/FormComponent';
import InfoComponent from './global-components/InfoComponent';
import AboutV6 from './section-components/about-v6';
import InstructorPage from './section-components/instructor';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import { Link } from 'react-router-dom';
import FormulaireInscriptionEnLigne from './global-components/formulaire-inscritenligne'; // Import du formulaire

const Formation = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false); // État pour afficher ou masquer le popup

    const handleOpenPopup = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return(  <div >
        <Navbar />
        <div className="formation-container">
                <FormComponent />
                <InfoComponent />
            </div>
            <AboutV6 />
            <InstructorPage />
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

export default Formation


import React, { useState } from 'react';

const FormulaireInscriptionEnLigne = () => {
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    if (!isFormVisible) {
        return null; // Cache le formulaire si l'état est défini sur `false`
    }

    return (
        <div className="form-container">
            <button
                onClick={handleCloseForm}
                className="close-button"
                style={{
                    position: 'absolute',
                    top: '70px',
                    right: '470px', // Ajustez cette valeur selon vos besoins pour l'espacement
                    backgroundColor: '#007BFF',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    zIndex: 1000, 
                }}
            >
                Fermer
            </button>
            <h2>Inscription en Ligne</h2>
            <form className="form">
                {/* Civilité */}
                <div className="form-group">
                    <label htmlFor="civilite">Civilité *</label>
                    <select id="civilite" required>
                        <option value="M">M</option>
                        <option value="Mme">Mme</option>
                        <option value="Mlle">Mademoiselle</option>
                    </select>
                </div>

                {/* Prénom et Nom */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom *</label>
                        <input type="text" id="prenom" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom">Nom *</label>
                        <input type="text" id="nom" required />
                    </div>
                </div>

                {/* Email et Téléphone */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone">N° Téléphone *</label>
                        <input type="text" id="telephone" required />
                    </div>
                </div>

                {/* Post occupé et Employeur */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="postOccupe">Post occupé *</label>
                        <input type="text" id="postOccupe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employeur">Employeur</label>
                        <input type="text" id="employeur" />
                    </div>
                </div>

                {/* Pays */}
                <div className="form-group">
                    <label htmlFor="pays">Pays *</label>
                    <select id="pays" required>
                        <option value="tunisia">Tunisia (تونس)</option>
                        <option value="france">France</option>
                        <option value="algeria">Algeria</option>
                        <option value="maroc">Maroc</option>
                    </select>
                </div>

                {/* Mode de formation */}
                <div className="form-group">
                    <label>Mode de la formation *</label>
                    <div className="button-group">
                        <button type="button">Sur Catalogue</button>
                        <button type="button">Sur Mesure</button>
                    </div>
                </div>

                {/* Titre de la formation */}
                <div className="form-group">
                    <label htmlFor="titreFormation">Titre de la formation *</label>
                    <select id="titreFormation" required>
                        <option value="">-- Choisissez un titre --</option>
                        <option value="projets">Projets et programmes de développement</option>
                        <option value="management">Management</option>
                        <option value="it">Technologies de l'information</option>
                    </select>
                </div>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>

                {/* Bouton d'envoi */}
                <button type="submit" className="btn btn-primary">
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default FormulaireInscriptionEnLigne;

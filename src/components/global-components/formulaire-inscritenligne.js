import React from 'react';

const FormulaireInscriptionEnLigne = () => {
    return (
        <div className="inscription-form-container ">
            <h2 className="inscription-title mg-top--50">Inscription en Ligne</h2>
            <form className="inscription-form ">
                {/* Civilité */}
                <div className="form-group11">
                    <select id="civilite" className="form-select" required>
                        <option value="Civilité">Civilité</option>
                        <option value="Mme">Mme</option>
                        <option value="Mlle">Mademoiselle</option>
                    </select>
                </div>

                {/* Prénom et Nom */}
                <div className="form-row1">
                    <div className="form-group11">
                        <input type="text" id="prenom" placeholder='Prénom' className="form-input" required />
                    </div>
                    <div className="form-group11">
                        <input type="text" id="nom" placeholder='Nom'className="form-input" required />
                    </div>
                </div>

                {/* Email et Téléphone */}
                <div className="form-row1">
                    <div className="form-group11">
                        <input type="email" id="email" placeholder='Email' className="form-input" required />
                    </div>
                    <div className="form-group11">
                        <input type="text" id="telephone" placeholder='N° Téléphone *' className="form-input" required />
                    </div>
                </div>

                {/* Post occupé et Employeur */}
                <div className="form-row1">
                    <div className="form-group11">
                        <input type="text" id="postOccupe" placeholder='Post occupé *' className="form-input" required />
                    </div>
                    <div className="form-group11">
                        <input type="text" id="employeur" placeholder='Employeur *' className="form-input" />
                    </div>
                </div>

                {/* Pays */}
                <div className="form-group11">
                    <label >Pays *</label>
                    <select id="pays" className="form-select" required>
                        <option value="tunisia">Tunisia (تونس)</option>
                        <option value="france">France</option>
                        <option value="algeria">Algeria</option>
                        <option value="maroc">Maroc</option>
                    </select>
                </div>

                {/* Mode de formation */}
                <div className="form-group11">
                    <label>Mode de la formation *</label>
                    <div className="button-group">
                        <button type="button" className="btn-catalogue">Sur Catalogue</button>
                        <button type="button" className="btn-sur-mesure">Sur Mesure</button>
                    </div>
                </div>

                {/* Titre de la formation */}
                <div className="form-group11">
                    <label >Titre de la formation *</label>
                    <select id="titreFormation" className="form-select" required>
                        <option value="">-- Choisissez un titre --</option>
                        <option value="projets">Projets et programmes de développement</option>
                        <option value="management">Management</option>
                        <option value="it">Technologies de l'information</option>
                    </select>
                </div>

                {/* Message */}
                <div className="form-group11">
                    <textarea id="message" className="form-textarea" placeholder='Message *' rows="5" required></textarea>
                </div>

                {/* Bouton d'envoi */}
                <button type="submit" className="btn-submit">
                    Envoyer
                </button>
            </form>
        </div>
    );
};

export default FormulaireInscriptionEnLigne;

import React, { useEffect, useState } from 'react';

const FormulaireInscrit = () => {
    const [formation, setFormation] = useState({
        formationNom: '',
        formationCode: '',
        formationDuree: '',
        formationLangue: '',
        mode: '',
    });

    // Charger les données depuis l'API
    useEffect(() => {
        const fetchFormation = async () => {
            try {
                const response = await fetch('http://localhost:4500/api/formation'); // Remplacez par l'URL de votre API
                const data = await response.json();
                setFormation(data);
            } catch (error) {
                console.error('Erreur lors du chargement des données:', error);
            }
        };

        fetchFormation();
    }, []);

    return (
        <div className="container22 ">
            <div className="header22">
                <h2>Formulaire</h2>
                <p className="description">Les processus et outils clés de planification et suivi-évaluation des projets et programmes de développement</p>
                <p><strong>Code de la formation:</strong> EXP01 </p>
                <p><strong>Durée de la formation:</strong> 2 semaines </p>
                <p><strong>Langue de la formation:</strong>Francais </p>
                <p><strong>Mode de la formation:</strong>  Présentiel</p>
            </div>

            <form className="form">
                <select name="civility" className="form-control">
                    <option value="M.">M.</option>
                    <option value="Mme">Mme</option>
                    <option value="Mlle">Mlle</option>
                </select>

                <input type="text" placeholder="Prénom *" className="form-control" required />
                <input type="text" placeholder="Nom *" className="form-control" required />
                <input type="email" placeholder="Email *" className="form-control" required />
                <input type="tel" placeholder="N° téléphone *" className="form-control" required />
                <input type="text" placeholder="Post occupé *" className="form-control" required />
                <input type="text" placeholder="Employeur *" className="form-control" required />
                <input type="text" placeholder="Pays *" className="form-control" required />
                <input type="text" placeholder="Date et lieu" className="form-control" />

                <textarea placeholder="Message *" className="form-control" rows="4" required></textarea>

                <button type="submit" className="btn-submit">ENVOYER</button>
            </form>
        </div>
    );
};

export default FormulaireInscrit;

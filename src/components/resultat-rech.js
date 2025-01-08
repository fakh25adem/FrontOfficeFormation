import React from "react";
import { useLocation } from "react-router-dom";

const ResultatRech = () => {
    const location = useLocation();
    const searchData = location.state;

    const calculerDuree = (dateDebut, dateFin) => {
        if (!dateDebut || !dateFin) return "Durée inconnue";

        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);

        if (isNaN(debut.getTime()) || isNaN(fin.getTime())) return "Dates invalides";

        const difference = Math.ceil((fin - debut) / (1000 * 60 * 60 * 24));
        return difference > 0 ? `${difference} jours` : "Dates incohérentes";
    };

    if (!searchData) {
        return <div>Aucune donnée de recherche n'a été transmise.</div>;
    }

    return (
        <div className="result-container ">
            
                <div className="result-count mg-top-1">
                    <span className="count">{searchData.results?.length || 0}</span> RÉSULTATS
                </div>
            <h2>Formations</h2>
            <div className="results-list ">
                {searchData.results && searchData.results.length > 0 ? (
                    searchData.results.map((result, index) => (
                        <div key={index} className="result-card">
                            <div className="card-header">
                                <h3>{result.domaine}</h3>
                                <p>{result.formation}</p>
                            </div>
                            <div className="card-divider"></div>
                            <div className="card-footer">
                                <span className="duration">
                                    ⏱ {calculerDuree(result.dateDebut, result.dateFin)}
                                </span>
                                <span className="location">📍 {result.pays || "Non spécifié"}</span>
                                <span className={`type ${result.formationType.toLowerCase()}`}>
                                    {result.formationType === "EnLigne" ? "🌐 En Ligne" : "🏫 Présentiel"}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default ResultatRech;

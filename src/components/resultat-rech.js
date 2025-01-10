import React, { useState, useEffect } from 'react';
import axios from 'axios';
import countries from './country/country';
const ResultatRech = () => {
    const savedFormations = JSON.parse(localStorage.getItem('formations'));

    const [searchData, setsearchData] = useState(savedFormations);

    console.log('searchData',searchData)

    const calculerDuree = (dateDebut, dateFin) => {
        if (!dateDebut || !dateFin) return "Durée inconnue";

        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);

        if (isNaN(debut.getTime()) || isNaN(fin.getTime())) return "Dates invalides";

        const difference = Math.ceil((fin - debut) / (1000 * 60 * 60 * 24));
        return difference > 0 ? `${difference} jours` : "Dates incohérentes";
    };
    const [selectedCountry, setSelectedCountry] = useState("");
    const [sousDomaines, setFilteredSousDomaines] = useState([]);
    const [selectedSousDomaine, setSelectedSousDomaine] = useState("");
    const [domaines, setDomaines] = useState([]);
    const [selectedDomaine, setSelectedDomaine] = useState("");
    const Url = process.env.REACT_APP_URL_DEV;
    const domainesApiURL = `${Url}/api/Domaine/all`;
    const sousDomainesApiURL = `${Url}/api/sousDomaine/iddomaine`;
    const [selectedDate, setSelectedDate] = useState('');
    const [activeFilters, setActiveFilters] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            domaine: selectedDomaine,
            sousDomaine: selectedSousDomaine,
            date: selectedDate,
            pays: selectedCountry,
        };
        console.log('recherche', data)
    
        try {
            const response = await axios.post(`${Url}/api/Formation/recherche`, data);
            console.log('Formations récupérées:', response.data.data);
            setsearchData(response.data.data)
          
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    };
    useEffect(() => {
        const fetchDomaines = async () => {
            try {
                const response = await axios.get(domainesApiURL);
                const data = response.data.data;
                if (Array.isArray(data)) {
                    setDomaines(data);
                } else {
                    console.error("Données inattendues reçues pour les domaines.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des domaines :", error);
            }
        };
        fetchDomaines();
    }, []);
    // Charger les sous-domaines dynamiquement lorsque le domaine est sélectionné
    useEffect(() => {
        if (selectedDomaine) {
            const fetchSousDomaines = async () => {
                try {
                    const response = await axios.get(`${sousDomainesApiURL}/${selectedDomaine}`);
                    const data = response.data.data;
                    if (Array.isArray(data)) {
                        setFilteredSousDomaines(data);
                    } else {
                        console.error("Données inattendues reçues pour les sous-domaines.");
                        setFilteredSousDomaines([]);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des sous-domaines :", error);
                    setFilteredSousDomaines([]);
                }
            };

            fetchSousDomaines();
        } else {
            setFilteredSousDomaines([]);
        }
    }, [selectedDomaine]);

    // useEffect(() => {
    //     const filters = [];
    //     if (selectedDomaine) filters.push('Domaine sélectionné');
    //     if (selectedSousDomaine) filters.push('Sous-domaine sélectionné');
    //     if (selectedDate) filters.push('Date sélectionnée');
    //     if (selectedCountry) filters.push('Pays sélectionné');
    //     setActiveFilters(filters);
    // }, [selectedDomaine, selectedSousDomaine, selectedDate, selectedCountry]);

    // const clearFilters = () => {
    //     setSelectedCountry('');
    //     setSelectedDomaine('');
    //     setSelectedSousDomaine('');
    //     setSelectedDate('');
    // };

    if (!searchData) {
        return <div>Aucune donnée de recherche n'a été transmise.</div>;
    }

    return (
        <div className="container55">
        <div className="row">
            {/* Sidebar */}
            <div className="col-3">
                <aside className="sidebar2">
                    <h3 className="mg-top-1">Affiner la recherche</h3>
                    <div className="filter-section">
                      
    
                        {/* Liste des domaines */}
                        <select
                            name="domaine"
                            value={selectedDomaine}
                            onChange={(e) => setSelectedDomaine(e.target.value)}
                        >
                            <option value="">Choisissez un domaine</option>
                            {domaines.map((domaine) => (
                                <option key={domaine.domaineId} value={domaine.domaineId}>
                                    {domaine.domaineNom}
                                </option>
                            ))}
                        </select>
    
                        {/* Liste des sous-domaines */}
                        <select
                            name="sousDomaine"
                            value={selectedSousDomaine}
                            onChange={(e) => setSelectedSousDomaine(e.target.value)}
                        >
                            <option value="">Formation associée</option>
                            {sousDomaines.map((sousDomaine) => (
                                <option key={sousDomaine.sousDomaineId} value={sousDomaine.sousDomaineId}>
                                    {sousDomaine.sousDomaineNom}
                                </option>
                            ))}
                        </select>
    
                        <h6>Date de la formation</h6>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            placeholder="Date de la formation"
                        />
    
                        <h6>Pays de la formation</h6>
                        <select name="pays" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                            <option value="">Choisissez un pays</option>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <button  className="btn-clear-filters mt-3" type="button" onClick={handleSubmit}>RECHERCHE</button>

                </aside>
            </div>
    
            {/* Contenu principal */}
            <div className="col-9">
                <div className="result-container">
                    <div className="result-count mg-top-1">
                        <span className="count">{searchData?.length || 0}</span> RÉSULTATS
                    </div>
                    <h2>Formations</h2>
                    <div className="results-list">
                        {searchData && searchData.length > 0 ? (
                            searchData.map((result, index) => (
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
                                        <span className={`type ${result.formationType?.toLowerCase()}`}>
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
            </div>
        </div>
    </div>
    
    );
};

export default ResultatRech;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import countries from '../country/country';
import { useHistory } from "react-router-dom";
const Sidebar = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const [selectedCountry, setSelectedCountry] = useState("");
    const [sousDomaines, setFilteredSousDomaines] = useState([]);
    const [selectedSousDomaine, setSelectedSousDomaine] = useState("");
    const [domaines, setDomaines] = useState([]);
    const [selectedDomaine, setSelectedDomaine] = useState("");
    const Url = process.env.REACT_APP_URL_DEV;
    const history = useHistory(); // Utilisez useHistory au lieu de useNavigate
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
        // Supprimer les propriétés qui sont undefined ou null
        // Object.keys(data).forEach(key => (data[key] == null) && delete data[key]);

        // Envoyer les données au serveur (si nécessaire) et rediriger avec les données
        try {
            const response = await axios.post(`${Url}/api/Formation/recherche`, data);
            console.log('Formations récupérées:', response.data.data);

            // Redirigez vers la page des résultats avec les données de recherche
            history.push({
                pathname: "/RechercheResult",
                state: { ...data, results: response.data.data },
            });
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

    useEffect(() => {
        const filters = [];
        if (selectedDomaine) filters.push('Domaine sélectionné');
        if (selectedSousDomaine) filters.push('Sous-domaine sélectionné');
        if (selectedDate) filters.push('Date sélectionnée');
        if (selectedCountry) filters.push('Pays sélectionné');
        setActiveFilters(filters);
    }, [selectedDomaine, selectedSousDomaine, selectedDate, selectedCountry]);

    const clearFilters = () => {
        setSelectedCountry('');
        setSelectedDomaine('');
        setSelectedSousDomaine('');
        setSelectedDate('');
    };

    return (
        <aside className="sidebar2  ">
            <h3 className="mg-top-1">Affiner la recherche</h3>
            <div className="filter-section ">

                <h4>Votre sélection ({activeFilters.length})</h4>
                <ul>
                    {activeFilters.map((filter, index) => (
                        <li key={index}>{filter}</li>
                    ))}
                </ul>

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
                {/* Liste des sous-domaines récupérés */}
                <select
                    name="sousDomaine"
                    value={selectedSousDomaine}
                    onChange={(e) => setSelectedSousDomaine(e.target.value)}
                >
                    <option value="">Formation associé</option>
                    {sousDomaines.map((sousDomaine) => (
                        <option key={sousDomaine.sousDomaineId} value={sousDomaine.sousDomaineId}>
                            {sousDomaine.sousDomaineNom}
                        </option>
                    ))}
                </select>
                <h6>Date de la formation</h6>
                <input type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)} placeholder="Date de la formation" />
                <h6>Pays de la formation</h6>
                <select name="pays" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">Choisissez un pays</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>

            </div>
            <button className="btn-clear-filters" onClick={clearFilters}>Effacer tous les filtres</button>
        </aside>
    );
};

export default Sidebar;

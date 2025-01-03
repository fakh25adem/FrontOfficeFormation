import React, { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { Link } from "react-router-dom";

import axios from 'axios';
import countries from '../country/country';
const FormComponent = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const [selectedCountry, setSelectedCountry] = useState("");
    const [sousDomaines, setFilteredSousDomaines] = useState([]);
    const [selectedSousDomaine, setSelectedSousDomaine] = useState("");
    const [domaines, setDomaines] = useState([]);
    const [selectedDomaine, setSelectedDomaine] = useState("");
    const Url = process.env.REACT_APP_URL_DEV;
    const domainesApiURL = `${Url}/api/Domaine/all`;
    const sousDomainesApiURL = `${Url}/api/sousDomaine/iddomaine`;

    // Charger les domaines au montage du composant
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

    return (
        <div className="catalogue-section" style={{
            backgroundImage: 'url(' + publicUrl + 'assets/img/institute/bg-lastest-new-now-2.jpg)',
        }}>
            <div className="form-container">
                <h2>Formation sur catalogue</h2>
                <form>
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
                    <input type="date" placeholder="Date de la formation" />
                    <h6>Pays de la formation</h6>
                    <select name="pays" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                        <option value="">Choisissez un pays</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>

                    <button type="submit">RECHERCHE</button>
                </form>
            </div>

            <div className="info-cards">
                <div className="card">
                    <FaChalkboardTeacher size={40} style={{ color: "#f9a825", marginBottom: "10px" }} />
                    <h3>FORMATION SUR MESURE</h3>
                    <h6><Link to="/FormMesur">En savoir +</Link></h6>
                </div>
                <div className="card">
                    <FaGraduationCap size={40} style={{ color: "#f9a825", marginBottom: "10px" }} />
                    <h3>NOS CURSUS</h3>
                    <h6><Link to="/CursusForm">En savoir +</Link></h6>

                </div>
                <div className="card">
                    <FaLaptop size={40} style={{ color: "#f9a825", marginBottom: "10px" }} />
                    <h3>E-LEARNING</h3>
                    <a href="#">En savoir +</a>
                </div>
            </div>
        </div>
    );
};

export default FormComponent;

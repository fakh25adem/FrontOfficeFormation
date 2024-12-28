import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PageHeader = () => {
	const { formationCode } = useParams(); // Récupérer l'ID depuis l'URL
	const [nom, setNom] = useState(""); // État pour stocker le nom du domaine
	const Url = process.env.REACT_APP_URL_DEV;
  
	// Récupérer le nom du domaine basé sur domaineId
	useEffect(() => {
	  if (!formationCode) {
		console.error("ID du domaine non fourni !");
		return;
	  }
  
	  axios
	  .get(`${Url}/api/Formation/formations/${formationCode}`)
	  .then((response) => {
		console.log("Réponse de l'API :", response.data); // Log de la réponse API
	
		// Accéder au premier élément du tableau data
		const formation = response.data.data[0];
		if (formation && formation.formationNom) {
		  setNom(formation.formationNom); // Mettre à jour le nom
		  console.log("Nom du formation défini :", formation.formationNom);
		} else {
		  console.error("Aucun formationNom trouvé pour cet ID");
		}
	  })
	  .catch((error) => {
		console.error("Erreur lors de la récupération du formationNom:", error);
	  });
	
  }, [formationCode]);

  return (
    <div className="breadcrumb-area bg-overlay">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="section-title mb-0 text-center">
            <h2 className="page-title">{nom}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

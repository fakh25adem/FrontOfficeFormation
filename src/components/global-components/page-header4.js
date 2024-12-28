import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Utilisé pour extraire le paramètre d'URL
import axios from "axios";

const PageHeader4 = () => {
  const { idDomaine } = useParams(); // Récupérer l'ID depuis l'URL
  const [nom, setNom] = useState(""); // État pour stocker le nom du domaine

	const Url = process.env.REACT_APP_URL_DEV;
	const publicUrl = process.env.REACT_APP_PUBLIC_PAGE;

  // Récupérer le nom du domaine basé sur domaineId
  useEffect(() => {
    if (!idDomaine) {
      console.error("ID du domaine non fourni !");
      return;
    }

    axios
      .get(`${Url}/api/domaine/id/${idDomaine}`) // Utilisation du bon endpoint
      .then((response) => {
        console.log("Réponse de l'API :", response.data); // Log de la réponse API

        if (response.data && response.data.data && response.data.data.domaineNom ) {
          setNom(response.data.data.domaineNom); // Mettre à jour le nom

          console.log("Nom du domaine défini :", response.data.data.domaineNom);

        } else {
          console.error("Aucun domaine trouvé pour cet ID");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du domaine:", error);
      });
  }, [idDomaine]);

  return (
    <div
      className="page-header3-area"
      style={{
        backgroundImage: `url(${publicUrl}assets/img/institute/Eduma-cover-banner-17.jpg)`,
      }}
    >
      <div className="container">
        <div className="page-header3-inner">
          <div className="section-title">
            <h2 className="page-title">{nom}</h2> {/* Afficher le nom du domaine */}
            <ul className="page-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader4;

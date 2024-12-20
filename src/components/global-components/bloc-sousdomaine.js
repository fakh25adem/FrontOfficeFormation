import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';



const BlocSousDomaine = () =>{
    console.log("ssss",useParams())
    const { idDomaine } = useParams(); // Récupérer l'ID depuis l'URL
    console.log("domaineId", idDomaine)
	const [Sousdomaines, setSousdomaines] = useState([]); // État pour stocker les données

	useEffect(() => {
		axios
        .get(`http://localhost:4500/api/Sousdomaine/iddomaine/${idDomaine}`)
        .then((response) => {
        setSousdomaines(response.data.data);

		console.log('Message donnée',response.data.data); 
		// Stocker les données dans l'état
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des Domaines:', error);
      });
  }, []);
	  return (
		<div className="blog-area pd-top-80 pd-bottom-90 go-top">
		  <div className="container">
			<div className="row">
                <div>
                    <h3 className='text-center text-yellow'>Introduction</h3>
                    <p>Les projets et programmes de développement ont pour but l’amélioration du niveau socio-économique, les conditions et le niveau de vie des populations locales d’un pays. La mise en œuvre des projets et programmes obéit à un processus fait de plusieurs étapes toutes aussi importantes les unes que les autres, étapes au cours desquelles sont réalisées des activités.il s’agit donc de passer en revue ces différentes étapes et de recenser les difficultés qui nuisent à la mise en œuvre efficace et efficiente des projets EXIFOD offre des modules de formation complets pour assurer la bonne gestion des projets et programmes de développement, en respectant leurs objectifs, leurs échéances, leurs coûts et les critères de qualité.</p>
                </div>
			  <div className="col-lg-8 pd-top-80">
				<div className="row justify-content-center1">
				{Sousdomaines.map((Sousdomaine) => (
					<div className="col-md-6 col-lg-3" key={Sousdomaine.sousDomaineId}>
					  <div className="single-blog-inner">
						<div className="thumb">
						  <img
							src={`http://localhost:4500/images/${Sousdomaine.sousDomaineImage}`} // Image depuis le backend
							alt={Sousdomaine.sousDomaineImage}
						  />
						</div>
						<div className="details">
						  <h5>
							  {Sousdomaine.sousDomaineNom}
						  </h5>
						  <Link className="read-more-text" to={`//${Sousdomaine.sousDomaineId}`}>
							<h6>Fiche Formations </h6>
						  </Link>
						</div>
					  </div>
					</div>
				  ))}
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  );
  };


export default BlocSousDomaine;

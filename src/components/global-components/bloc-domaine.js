import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



const BlocDomaine = () =>{
	const [domaines, setDomaines] = useState([]); // État pour stocker les données
	const Url = process.env.REACT_APP_URL_DEV;
	console.log('url',Url)

	useEffect(() => {
		axios
      .get(`${Url}/api/domaine/all`) // Remplacer par votre endpoint exact
      .then((response) => {
        setDomaines(response.data.data);

		console.log('Message donnée',response.data.data); 
		// Stocker les données dans l'état
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des Domaines:', error);
      });
  }, []);
	  return (
		<div className="blog-area  pd-top-80 pd-bottom-90 go-top" style={{padding:'40px'}}>
		
				<div className="row ">
				{domaines.map((domaine) => (
					<div className="col-md-4 col-sm-12 col-lg-3 mt-3" key={domaine.domaineId}>
					  <div className="single-blog-inner ">
						<div className="thumb">
						  <img
							src={`${Url}/images/${domaine.domaineImage}`} // Image depuis le backend
							alt={domaine.domaineImage}
						  />
						</div>
						<div className="details">
						  <h5 style={{height:"50px"}}>
							  {domaine.domaineNom}
						  </h5>
						  <Link className="read-more-text" to={`/sousdomaine-dexpertise/${domaine.domaineId}`}>
							<h6>Liste des formations </h6>
						  </Link>
						</div>
					  </div>
					</div>
				  ))}
				</div>
			  </div>
		
	  );
  };


export default BlocDomaine;

import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';



const BlocSousDomaine = () => {
    console.log("ssss", useParams())
    const { idDomaine } = useParams(); // Récupérer l'ID depuis l'URL
    console.log("domaineId", idDomaine)
    const [Sousdomaines, setSousdomaines] = useState([]); // État pour stocker les données
    const [nom, setnom] = useState([]); // État pour stocker les données
	const Url = process.env.REACT_APP_URL_DEV;


    useEffect(() => {
        axios
            .get(`${Url}/api/Sousdomaine/iddomaine/${idDomaine}`)
            .then((response) => {
                setSousdomaines(response.data.data);
                setnom(response.data.data[0].sousDomaineIntoductionGlob)
                console.log('Message donnée',
                );
                // Stocker les données dans l'état
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des Domaines:', error);
            });
    }, [idDomaine]);
    return (
        <div className="blog-area pd-top-80 pd-bottom-90 go-top" style={{padding:'50px'}}>
          
                    <div>
                        <h3 className='text-center text-yellow'>Introduction</h3>
                        <p>{nom}</p>
                    </div>
                        <div className="row mt-5 ">
                            {Sousdomaines.map((Sousdomaine) => (
                                <div className="col-md-6 col-lg-4 col-sm-12 mt-5" key={Sousdomaine.sousDomaineId}>
                                    <div className="single-blog-inner     ">
                                        <div className="thumb">
                                            <img
                                                src={`${Url}/images/${Sousdomaine.sousDomaineImage}`} // Image depuis le backend
                                                alt={Sousdomaine.sousDomaineImage}

                                            />
                                        </div>
                                        <div className="details">
                                            <h5 style={{fontSize:"14px",height:'70px'}}>
                                                {Sousdomaine.sousDomaineNom}
                                            </h5>
                                                <Link
                                                    className="read-more-text"
                                                    to={`/course-details/${Sousdomaine.sousDomaineId}`}
                                                    
                                                >
                                                    <h6>Fiche Formations</h6>
                                                </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
           
    );
};


export default BlocSousDomaine;

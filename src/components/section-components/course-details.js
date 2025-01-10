import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FaPlane, FaCar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
const CourseDetails = () => {
    const { formationCode } = useParams(); // Récupérer le code depuis l'URL
    const [formation, setFormation] = useState(null); // État pour stocker la formation
    const [session, setsession] = useState([]); // État pour stocker la formation
    const [modeChoisi, setModeChoisi] = useState(''); // État pour le mode sélectionné

    const Url = process.env.REACT_APP_URL_DEV;

    useEffect(() => {
        axios
            .get(`${Url}/api/Formation/formations/${formationCode}`)
            .then((response) => {
                console.log('Formation BY CODE', response.data.data[0].Session);
                // Vérifiez que les données sont un tableau et extrayez le premier élément
                if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                    setFormation(response.data.data[0]);
                    setsession(response.data.data[0].Session)
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, [formationCode]);
    const groupedSessions = session.reduce((acc, current) => {
        if (!acc[current.sessionVille]) {
            acc[current.sessionVille] = [];
        }
        acc[current.sessionVille].push(current);
        return acc;
    }, {});



    return (
        <div className="course-single-area pd-top-120 pd-bottom-90">
            <div style={{ padding: '40px' }}>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="course-course-detaila-inner">
                            <h4 style={{
                                color: 'black'
                            }}>{formation?.formationNom}</h4>

                            <div className="course-details-nav-tab text-center">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="tab1-tab"
                                            data-toggle="tab"
                                            href="#tab1"
                                            role="tab"
                                            aria-controls="tab1"
                                            aria-selected="true"
                                        >
                                            Objectifs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="tab2-tab"
                                            data-toggle="tab"
                                            href="#tab2"
                                            role="tab"
                                            aria-controls="tab2"
                                            aria-selected="false"
                                        >
                                            Programme
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="tab3-tab"
                                            data-toggle="tab"
                                            href="#tab3"
                                            role="tab"
                                            aria-controls="tab3"
                                            aria-selected="false"
                                        >
                                            Prérequis
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Public</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab5-tab" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">Points Forts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab6-tab" data-toggle="tab" href="#tab6" role="tab" aria-controls="tab6" aria-selected="false">Certification</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab1"
                                    role="tabpanel"
                                    aria-labelledby="tab1-tab"
                                >
                                    {/* Objectifs */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationObjectif }} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab2"
                                    role="tabpanel"
                                    aria-labelledby="tab2-tab"
                                >
                                    {/* Programme */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationProgramme }} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab3"
                                    role="tabpanel"
                                    aria-labelledby="tab3-tab"
                                >
                                    {/* Prérequis */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationPrerequis }} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab4"
                                    role="tabpanel"
                                    aria-labelledby="tab4-tab"
                                >
                                    {/* Public */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationPublic }} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab5"
                                    role="tabpanel"
                                    aria-labelledby="tab5-tab"
                                >
                                    {/* Point Fort */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationPointFort }} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab6"
                                    role="tabpanel"
                                    aria-labelledby="tab6-tab"
                                >
                                    {/* Certification */}
                                    <p dangerouslySetInnerHTML={{ __html: formation?.formationCertification }} />
                                </div>
                            </div>
                        </div>
                        
                            <h2 >NOS AVANTAGES</h2>
                            <div className=" row mt-2">
                                <div  className=" col-lg-3 col-sm-6 col-md-6 text-center">
                                <Link to="/VisaPage">
                                    <FaPlane style={{fontSize:'50px',color:'red'}} className="icon icon-plane" />
                                    <p style={{fontWeight:'600',color:'black'}}>Visa</p>
                                </Link>
                                </div>
                                <div  className=" col-lg-3 col-sm-6 col-md-6 text-center">
                                <Link to="/HebegrementPage">
                                    <IoHome style={{fontSize:'50px',color:'red'}} className="icon icon-home" />
                                    <p style={{fontWeight:'600',color:'black'}}>Appui à l’hébergement</p>
                                    </Link>

                                </div>
                                <div  className=" col-lg-3 col-sm-6 col-md-6 text-center">
                                <Link to="/AccueilTransfertPage">

                                    <FaCar style={{fontSize:'50px',color:'red'}} className="icon icon-car" />
                                    <p style={{fontWeight:'600',color:'black'}}>Accueil & transfert</p>
                                    </Link>

                                </div>
                                <div  className=" col-lg-3 col-sm-6 col-md-6 text-center">
                                <Link to="/VisiteTouristPage">

                                    <FaMapLocationDot style={{fontSize:'50px',color:'red'}} className="icon icon-map" />
                                    <p style={{fontWeight:'600',color:'black'}}>Visites touristiques</p>
                                    </Link>

                                </div>
                            </div>
                        

                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="td-sidebar">
                            <div className="widget widget_feature">
                                <div className="d-flex justify-content-center mg-top-90">
                                    {/* Boutons pour définir le mode */}
                                    <button
                                        className={`btn ${modeChoisi === 'Présentiel' ? 'btn-primary' : 'btn-secondary'} mx-1`}
                                        onClick={() => setModeChoisi('Présentiel')}
                                        style={{ width: '130px' }}
                                    >
                                        Présentiel
                                    </button>
                                    <button
                                        className={`btn ${modeChoisi === 'En ligne' ? 'btn-primary' : 'btn-secondary'} mx-1`}
                                        onClick={() => setModeChoisi('En ligne')}
                                    >
                                        En ligne
                                    </button>
                                </div>
                                <ul className='mt-4' >
                                    <li>
                                        <i className="fa fa-user " />
                                        <span>Code Formation :</span> {formation?.formationCode}
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o" />
                                        <span>Durée :</span> {formation?.formationDuree}
                                    </li>
                                    <li>
                                        <i className="fa fa-clipboard" />
                                        <span>Langues :</span> {formation?.formationLangue}
                                    </li>

                                </ul>
                                <div className="price-wrap">
                                    {Object.keys(groupedSessions).length > 0 ? (
                                        Object.keys(groupedSessions).map((ville, index) => (
                                            <div key={index} className="accordion mb-3">
                                                <div className="accordion-header">
                                                    <button
                                                        className="btn "
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target={`#collapse${index}`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapse${index}`}
                                                        style={{ color: '#5266C2' }}
                                                    >
                                                        <strong>{ville}</strong> / Prix: {groupedSessions[ville][0].sessionPrix}€

                                                    </button>
                                                </div>
                                                <div
                                                    id={`collapse${index}`}
                                                    className="collapse"
                                                    data-parent=".accordion"
                                                >
                                                    <div className="card-body" style={{ padding: '10px' }}>
                                                        {groupedSessions[ville].map((session, idx) => (
                                                            <div
                                                                key={idx}
                                                                style={{
                                                                    padding: '5px 0',
                                                                    borderBottom: '1px solid #ddd',


                                                                }}
                                                            >
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        name={`session-${ville}`}
                                                                        value={session.sessionId}
                                                                    />{' '}
                                                                    Session {idx + 1}: du {session.sessionDateDebut} au{' '}
                                                                    {session.sessionDateFin}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Pas de sessions disponibles.</p>
                                    )}
                                    <Link to={{
                                        pathname: "/Inscription",
                                        state: {
                                            formation,
                                            mode: modeChoisi,
                                        }
                                    }}>
                                        <button style={{ color: 'white' }} className="btn btn-base btn-radius mt-3 mx-3">
                                            S'inscrire
                                        </button>
                                    </Link>
                                    <Link to="/FormMesur">
                                        <button style={{ color: 'white' }} className="btn btn-base btn-radius mt-3 mx-1">
                                            Sur Mesure
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

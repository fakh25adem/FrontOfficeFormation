import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class IntroV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

	    return  <div className="main-blog-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="team-details-page">
			      <div className="row">
			        <div className="col-lg-5">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/Qui-Somme-Nous.avif"} alt="img" />
			          </div>
			        </div>
			        <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
			            <h3>Qui sommes nous ?</h3>			            
			            <span>EXIFOD est un organisme de formation continue et de conseil qualifié, nous mettons à votre disposition tout le savoir, les compétences et l’expérience de notre groupe de formateurs chevronnés dans leur domaine afin de vous permettre de développer vos connaissances en apprentissage à distance ou en présence, individuel ou collectif, EXIFOD vous accompagne jusqu’à l’obtention d’un certificat qualifié de compétence.</span>
			            <p className="mt-4">Etant un organisme multifonctionnel, EXIFOD vous permet de valoriser vos connaissances dans un encadrement professionnel. Notre mission consiste à former et développer les compétences personnelles ainsi que professionnelles selon vos besoins et selon votre calendrier.</p>
			          </div>
			        </div>
			      </div>
				  <div className="row">
				  	<div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
			            <h3>Notre pédagogie</h3>			            
			            <span>EXIFOD s’investit dans la recherche et les pédagogies innovantes pour enrichir son offre et proposer des expériences toujours plus efficaces.Notre expérience, notre savoir-faire et nos méthodes pédagogiques font de notre organisme EXIFOD un partenaire de confiance pour vos formations internes et externes dans de nombreux domainesEn vous formant avec EXIFOD, vous bénéficiez d’une pédagogie innovante et personnalisée avec des solutions mixtes personnelles, sur mesure et à distance.Notre équipe pédagogique est composée des formateurs experts dans leurs domaines respectifs et dédiés à l’amélioration des compétences et de la performance de nos clients,Différentes modalités pédagogiques sont utilisées pour ancrer durablement les apprentissages, stimuler l’intelligence individuelle ou collective, développer le potentiel des équipes et aborder de manière ludique les problématiques techniques et métiers.</span>
			           
			          </div>
			        </div>
					<div className="col-lg-5 ">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/notre-pédagogie.jpg"} alt="img" />
			          </div>
			        </div>
					</div>
			      
			    </div>
			    
			  </div>
			</div>
	  
        }
}

export default IntroV2
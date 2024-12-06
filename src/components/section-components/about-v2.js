import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

           let SectionClass = this.props.sectionclass ? this.props.sectionclass : ''

		   return <div className="work-area pd-top-110 go-top">
		   <div className="container">
			 <div className="section-title">
				   <h2 className="titleAbout">Les piliers de notre pédagogie :</h2>
			 </div>
			 <div className="row ">
			   <div className="col-lg-4 col-md-8">
				 <div className="single-intro-inner style-icon-bg  text-center">
				   <div className="thumb">
					 <img src={publicUrl+"assets/img/icon/icon1.png"} alt="img" />
				   </div>
				   <div className="details">
				   <h5>Innovation & professionnalisme</h5>
					 <p>Parce que vos besoins sont spécifiques, notre objectif est d’accompagner l’évolution de votre métier et de votre carrière via l’acquisition de nouvelles compétences et pratiques. Notre équipe pédagogique intervient à différentes étapes de votre parcours pour adapter la formation à vos objectifs.</p>
				   </div>
				 </div>
			   </div>
			   <div className="col-lg-4 col-md-8">
				 <div className="single-intro-inner style-icon-bg  text-center">
				   <div className="thumb">
					 <img src={publicUrl+"assets/img/icon/icon2.png"} alt="img" />
				   </div>
				   <div className="details">
					 <h5>La diversification et la flexibilité</h5>
					 <p>Parce que chaque participant est unique, nous proposons différentes modalités d'apprentissage : formations sur catalogue, sur mesure et en ligne. Cette flexibilité vous permet de choisir la méthode qui correspond le mieux à vos besoins et à vos contraintes. Nos formations sont disponibles en ligne, avec la même qualité pédagogique.</p>
				   </div>
				 </div>
			   </div>
			   <div className="col-lg-4 col-md-8">
				 <div className="single-intro-inner style-icon-bg  text-center">
				   <div className="thumb">
					 <img src={publicUrl+"assets/img/icon/icon2.png"} alt="img" />
				   </div>
				   <div className="details">
					 <h5>L’interaction et la précision</h5>
					 <p>Pour répondre à vos besoins et enrichir l’apprentissage, nous valorisons l’interaction entre les participants et les formateurs quelque soit le mode de formation trier par nos clients. Notre priorité c’est votre satisfaction, nous vous garantissons une formation adopter à vos besoins, actualiser et précise.</p>
				   </div>
				 </div>
			   </div>
			 </div>
		   </div>
		 </div>
        }
}

export default AboutV2
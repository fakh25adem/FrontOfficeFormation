import React from 'react';
import { Link } from 'react-router-dom';

const Client = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div className="client-area pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h3>Nos avantages</h3>
          </div >
		  
          <div className="row fix">
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <img style={{width:'40%'}} src={`${publicUrl}assets/img/institute/av.png`} alt="Accueil & transfert" />
                <h4>Accueil & transfert</h4>
                <p>Un accueil est prévu pour faciliter votre arrivée à l’aéroport pour vous conduire à l’hôtel et se poursuit tout au long de votre séjour.</p>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <img style={{width:'40%'}}   src={`${publicUrl}assets/img/institute/ap.png`} alt="Appui à l’hébergement" />
                <h4>Appui à l’hébergement</h4>
                <p>Exifod vous propose une série d’hôtels partenaires proches de toutes les commodités pour vous garantir un séjour agréable.</p>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <img style={{width:'40%'}}  src={`${publicUrl}assets/img/institute/visite.png`} alt="Visites touristiques" />
                <h4>Visites touristiques</h4>
                <p>Exifod organise gracieusement des excursions et visites dans des différentes villes. Les participants sont accompagnés par notre équipe.</p>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <img style={{width:'40%'}}  className="marginImage" src={`${publicUrl}assets/img/institute/visa.png`} alt="VISA" />
                <h4>VISA</h4>
                <p>Exifod Formation facilite l’obtention du visa d’entrée et de séjour en Tunisie pendant la durée de la formation de votre choix.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	  
  );
};

export default Client;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {
;
        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-area bg-base pd-top-100 pd-bottom-100" style={{backgroundImage: 'url('+publicUrl+'assets/img/institute/bg.png)'}}>
	<div className="container">
	  <div className="row justify-content-center">
	  <div class="col-lg-12 text-center">
        <h3>Nos avantages</h3>
      </div>
		<div className="col-lg-12">
		  <div className="institute-slider owl-carousel">
			<div className="item">
			  <img src={publicUrl+"assets/img/institute/png-1.png"} alt="img" />
			  <h4>Accueil & transfert</h4>
            <p>Un accueil est prévu pour faciliter votre arrivée à l’aéroport pour vous conduire à l’hôtel et se poursuit tout au long de votre séjour.</p>

			</div>
			<div className="item">
			  <img src={publicUrl+"assets/img/institute/png-2.png"} alt="img" />
			  <h4>Appui à l’hébergement</h4>
            <p>Exifod vous propose une série d’hôtels partenaires proches de toutes les commodités pour vous garantir un séjour agréable.</p>

			</div>
			<div className="item">
			  <img src={publicUrl+"assets/img/institute/png-3.png"} alt="img" />
			  <h4>visites touristiques</h4>
            <p>Exifod organise gracieusement des excursions et visites dans des différentes villes. Les participants sont accompagnés par notre équipe.</p>

			</div>
			<div className="item">
			  <img className='marginImage' src={publicUrl+"assets/img/institute/png-4.png"} alt="img" />
			  <h4>VISA</h4>
            <p>Exifod Formation facilite l’obtention du visa d’entrée et de séjour en Tunisie pendant la durée de la formation de votre choix.</p>
			</div>
			
		  </div>
		</div>
	  </div>
	</div>
  </div>



        }
}

export default Client
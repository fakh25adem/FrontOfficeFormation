import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup'; // Import de la bibliothèque pour le compteur

import parse from 'html-react-parser';

class HowToWork extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="work-area  go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/banner/background.jpeg)',
																backgroundSize: 'cover', // Pour couvrir toute la largeur
    															backgroundRepeat: 'no-repeat', // Empêche la répétition
    															backgroundPosition: 'center'}} >
																
  
			  <div className="container1">
			  <div className='title'> 
				<h1>Chiffre clés</h1>
				</div>

			    <div className="row">
					
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/logo1.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5><CountUp start={0} end={94532} duration={3} separator="" />			</h5>
			            <p>Nos experts formateurs
						</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/logo2.png"} alt="img" />
			          </div>
			          <div className="details">
					  <h5><CountUp start={0} end={94532} duration={3} separator="" />			</h5>
					  <p>Nos domaines d’interventions</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/logo3.png"} alt="img" />
			          </div>
			          <div className="details">
					  <h5><CountUp start={0} end={94532} duration={3} separator="" />			</h5>
					  <p>Taux de réussite</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/logo4.png"} alt="img" />
			          </div>
			          <div className="details">
					  <h5><CountUp start={0} end={94532} duration={3} separator="" />			</h5>
					  <p>Taux de satisfactions</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
			
        }
}

export default HowToWork
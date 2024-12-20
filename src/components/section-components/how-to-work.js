import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup'; // Import de la bibliothèque pour le compteur

const HowToWork = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  return (
    <div 
      style={{
        backgroundImage: `url(${publicUrl}assets/img/banner/background.jpeg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '30px 0',  // Réduction du padding pour compresser la hauteur
        minHeight: '150px',
		opacity:'0.8' // Hauteur minimale du bloc
      }}
    >
      <div className="container">
        <div className="title text-center mb-5">
         <b> <h1 style={{color:'black',fontWeight:'600'}}>Chiffres clés</h1></b>
        </div>

        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="single-intro-inner style-icon-bg bg-gray p-4">
              <div className="thumb">
                <img src={`${publicUrl}assets/img/icon/logo1.png`} alt="Nos experts formateurs" />
              </div>
              <div className="details">
                <h5><CountUp start={0} end={94532} duration={5} separator="" /></h5>
                <p>Nos experts formateurs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="single-intro-inner style-icon-bg bg-gray p-4">
              <div className="thumb">
                <img src={`${publicUrl}assets/img/icon/logo2.png`} alt="Nos domaines d’interventions" />
              </div>
              <div className="details">
                <h5><CountUp start={0} end={94532} duration={5} separator="" /></h5>
                <p>Nos domaines d’interventions</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="single-intro-inner style-icon-bg bg-gray p-4">
              <div className="thumb">
                <img src={`${publicUrl}assets/img/icon/logo3.png`} alt="Taux de réussite" />
              </div>
              <div className="details">
                <h5><CountUp start={0} end={94532} duration={5} separator="" /></h5>
                <p>Taux de réussite</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="single-intro-inner style-icon-bg bg-gray p-4">
              <div className="thumb">
                <img src={`${publicUrl}assets/img/icon/logo4.png`} alt="Taux de satisfactions" />
              </div>
              <div className="details">
                <h5><CountUp start={0} end={94532} duration={5} separator="" /></h5>
                <p>Taux de satisfactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;

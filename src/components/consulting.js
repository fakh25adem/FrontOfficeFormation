import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Consulting extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        
	    return  <div className="main-blog-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="team-details-page">
			      <div className="row">
			            <div className="col-lg-4">
			                <div className="thumb">
			                    <img src={publicUrl+"assets/img/team/notre-pédagogie.jpg"} alt="img" />
			                </div>
			            </div>
			            <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			                <div className="details">
			                    <h3 className='pd-bottom-10'>Certification ISO</h3>	
                                <h5 className='pd-bottom-20'>Engager votre organisation dans une démarche de certification  ISO</h5>		            
			                    <p><span>Oo2 Consulting </span>vous accompagne jusqu’a la certification ISO de votre organisation et même au delà en vous proposant d’exteurnaliser la gestion de votre système une foix la certification acquise. La certification ISO est l’occasion pour votre organisation d’améliorer ces processus et d’obtenir une reconnaissance par vos client.</p>
                                <span><Link to="/instructor-details">En Savoir plus  </Link></span>

                            </div>
			            </div>

			      </div>
				  <div className="row">
				  	<div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
                      <h3 className='pd-bottom-10'>Certification ISO</h3>	
                        <h5 className='pd-bottom-20'>Engager votre organisation dans une démarche de certification  ISO</h5>		            
			            <p><span>Oo2 Consulting </span>vous accompagne jusqu’a la certification ISO de votre organisation et même au delà en vous proposant d’exteurnaliser la gestion de votre système une foix la certification acquise. La certification ISO est l’occasion pour votre organisation d’améliorer ces processus et d’obtenir une reconnaissance par vos client.</p>
                        <span><Link to="/instructor-details">En Savoir plus  </Link></span>

			          </div>
			        </div>
					<div className="col-lg-4 ">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/notre-pédagogie.jpg"} alt="img" />
			          </div>
			        </div>
					</div>
                    <div className="row">
			            <div className="col-lg-4">
			                <div className="thumb">
			                    <img src={publicUrl+"assets/img/team/consult2.jpg"} alt="img" />
			                </div>
			            </div>
			            <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			                <div className="details">
			                    <h3 className='pd-bottom-10'>Gestion de projet</h3>	
                                <h5 className='pd-bottom-20'>Sécuriser votre projet depuis son démarrage jusqu’a sa livraison</h5>		            
			                    <p>Quel que soit votre projet,<span> Oo2 Consulting </span>se positionne comme un réel partenaire en suivant étroitement, avec vos équipes les différentes phases de vos projets pour garantir de leur bon deroulement dans le respect de l’équilibre qualité-coût-délais. </p>
                                <span><Link to="/instructor-details">En Savoir plus  </Link></span>

                            </div>
			            </div>
			        </div>
                    <div className="row">
				  	    <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			                <div className="details">
                                <h3 className='pd-bottom-10'>Gestion et amélioration des processus</h3>	
                                <h5 className='pd-bottom-20'>Produisez mieux à moindre coût et dans des délais plus courts</h5>		            
			                    <p>L’Exellence Opérationnelle est l’ensemble des méthodes et des pratiques visant à améliorer les performances de l’entreprise au bénéfice des parties prenantes(clients, travailleurs, fournisseurs, partenaires et actionnaires).
                                </p>
                                <span><Link to="/instructor-details">En Savoir plus  </Link></span>

			                </div>
			            </div>
					    <div className="col-lg-4 ">
			                <div className="thumb">
			                    <img src={publicUrl+"assets/img/team/notre-pédagogie.jpg"} alt="img" />
			                </div>
			            </div>
					</div>
                    <div className="row">
			            <div className="col-lg-4">
			                <div className="thumb">
			                    <img src={publicUrl+"assets/img/team/consult2.jpg"} alt="img" />
			                </div>
			            </div>
			            <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			                <div className="details">
			                    <h3 className='pd-bottom-10'>Management des personnes et GRH</h3>	
                                <h5 className='pd-bottom-20'>Améliorer votre management et développez la performance collective</h5>		            
			                    <p>Indisponsable pour mener la conduite du changement. pour gagner en efficacité professionnelle auprès de vos equipes managériales et opérationnelles et améliorer la performance de votre organisation.</p>
                                <span><Link to="/instructor-details">En Savoir plus  </Link></span>

                            </div>
			            </div>

			        </div>
                    <div className="row">
				  	    <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			                <div className="details">
                                <h3 className='pd-bottom-10'>Certification ISO</h3>	
                                <h5 className='pd-bottom-20'>Engager votre organisation dans une démarche de certification  ISO</h5>		            
			                    <p><span>Oo2 Consulting </span>vous accompagne jusqu’a la certification ISO de votre organisation et même au delà en vous proposant d’exteurnaliser la gestion de votre système une foix la certification acquise. La certification ISO est l’occasion pour votre organisation d’améliorer ces processus et d’obtenir une reconnaissance par vos client.</p>
                                <span><Link to="/instructor-details">En Savoir plus  </Link></span>

                            </div>
			            </div>
					    <div className="col-lg-4 ">
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

export default Consulting

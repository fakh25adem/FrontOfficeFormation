import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class scrollp extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="counter-area bg-gray">
			   <div className="container">
			    	<div className="counter-area-inner pd-top-120 pd-bottom-120" style={{backgroundImage: 'url("'+publicUrl+'assets/img/other/Avenue-Habib-Bourguiba-Tunis.jpg")'}}>
			        	<div className="section-title ">
			            	<h1>Devenir formateur ?	</h1>
			            	<p className="content ">Rejoignez-nous chez Exifod pour partager votre expertise et contribuer à former la prochaine génération de professionnels</p>
			        	</div>
						<Link to="/Formateur">
						<button classe="btn btn-base b-animate-3 mr-sm-3 mr-2">Postuler</button>
			    	</Link>
					</div>
				</div>
			</div>
        }
}

export default scrollp
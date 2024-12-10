import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Certifications extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

	    return  <div className="main-blog-area pd-top-40 ">
			  <div className="container">
			    <div className="certification">
                <h2 className="main-blog-area pd-top-60 ">Le lorem ipsum</h2>			            

			      <div className="row pd-top-60">
			        <div className="col-lg-5">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/cert1.jpg"} alt="img" />
			          </div>
			        </div>
			        <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
			            <span>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu’il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu’il est prêt ou que la mise en page est achevée.</span>
			          </div>
			        </div>
			      </div>
                  <h2 className="main-blog-area pd-top-60 ">Pourquoi choisir EXIFOD pour se certifier</h2>			            

				  <div className="row pd-top-60">
				  	<div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
			            <span>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu’il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu’il est prêt ou que la mise en page est achevée.</span>
			           
			          </div>
			        </div>
					<div className="col-lg-5 ">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/cert2.jpg"} alt="img" />
			          </div>
			        </div>
					</div>
			      
			    </div>
			    
			  </div>
			</div>
	  
        }
}

export default Certifications
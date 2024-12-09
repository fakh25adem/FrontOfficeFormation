import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavbarV2 extends Component {

	componentDidMount() {
     const $ = window.$;
     $( 'body' ).removeClass( 'home-3' );

   }
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area">
			  <div className="navbar-top">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-8 text-md-left text-center">
			          <ul>
			            <li><p><i className="fa fa-phone" /> (+216) 71 90 54 90</p></li>
			            <li><p><i className="fa fa-envelope-o" />  contact@exifod.com</p></li>
						<li><a href={publicUrl+"assets/img/catalogue.pdf"}><p><i className="fa fa-download"></i> Télécharger le catalogue</p></a></li>
			          </ul>
			        </div>
			        <div className="col-md-4">
			          <ul className="topbar-right text-md-right text-center">
			            <li className="social-area">
			              <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
			              <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
			              <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
			              <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			  <nav className="navbar navbar-area-2 navbar-area navbar-expand-lg go-top">
			    <div className="container nav-container">
			      <div className="responsive-mobile-menu">
			        <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="icon-left" />
			          <span className="icon-right" />
			        </button>
			      </div>
			      <div className="logo">
			        <Link to="/home-v2"><img src={publicUrl+"assets/img/exifod-logo-Blanc-png.png"} alt="img" /></Link>
			      </div>
			      <div className="collapse navbar-collapse" id="edumint_main_menu">
			        <ul className="navbar-nav menu-open">
			          <li className="menu-item-has-children ">
			            <Link to="/home-v2">Accueil</Link>
			          </li>
			          <li className="menu-item-has-children">
			            <Link to="/course">Domaine D'expertise</Link>
			            <ul className="sub-menu">

								<ul>
				            		<li><Link to="/course">Projets et programmes <li>de développement</li></Link></li>
	                        		<li><Link to="/course-details">Oil & Gas</Link></li>
									<li><Link to="/course-details">Développement durable</Link></li>
	                        		<li><Link to="/course-details">Changement climatique</Link></li>
								</ul>
								<ul>
				            		<li><Link to="/course">Passation des marchés</Link></li>
	                        		<li><Link to="/course-details">Finance et comptabilité</Link></li>
									<li><Link to="/course-details">Management des <li>ressources humaines</li></Link></li>
	                        		<li><Link to="/course-details">Modernisation de <li>l'administration publique</li></Link></li>
								</ul>
								<ul>
				            		<li><Link to="/course">Finances publiques</Link></li>
	                        		<li><Link to="/course-details">Santé publique</Link></li>
									<li><Link to="/course-details">Agriculture, nutrition <li>et sécurité alimentaire</li></Link></li>
	                        		<li><Link to="/course-details">Wash (water, sanitation <li>and hygiene)</li></Link></li>
								</ul>
				            </ul>
			          </li>
			          <li className="menu-item-has-children">
			            <a href="#">Nos Formations</a>
			           
			          </li>
			          <li className="menu-item-has-children">
			            <Link to="/blog">Fiches Métiers</Link>
			            
			          </li>
					  <li className="menu-item-has-children">
			            <Link to="/contact">Cértification</Link>
			            
			          </li>
					  <li className="menu-item-has-children">
			            <Link to="/blog">Actualités</Link>
			            
			          </li>
					  <li className="menu-item-has-children">
			            <Link to="/blog">Consulting</Link>
			            
			          </li>
			        </ul>
					
			      </div>
			      
			    </div>
			  </nav>
			</div>
        )
    }
}


export default NavbarV2
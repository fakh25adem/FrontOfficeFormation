import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";
	}
	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"
		return (   
						<footer className="footer-area footer-area-2 bg-gray">

				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_about text-center">
									<a href="index.html"><img src={publicUrl + "assets/img/logo3.png"} alt="img" /></a>
									<div className="details">
										<p>Nous pensons fermement que votre participation à l’une de nos formations serait bénéfique pour vous, alors n’hésitez pas de nous contacter pour toute information complémentaire.</p>
										<ul className="social-media">
											<li><a href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
											<li><a href="https://www.twitter.com/solverwp"><i className="fa fa-twitter" /></a></li>
											<li><a href="https://www.youtube.com/solverwp/"><i className="fa fa-instagram" /></a></li>
											<li><a href="https://www.pinterest.com/solverwp/"><i className="fa fa-pinterest" /></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">Contact Us</h4>
									<ul className="details">
									<li><i className="fa fa-phone" />  (+216) 71 90 54 29</li>
									<li><i className="fa fa-fax" />  (+216) 71 90 54 30</li>
									<li><i className="fa fa-envelope" /> contact@exifod.com</li>
									<li><i className="fa fa-map-marker" /> Complexe Khaireddine Pacha bloc A bureau A24- Montplaisir 1073 TUNIS</li>
										
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">Course</h4>
									<ul className="go-top">
										<li><Link to="/blog">Accueil</Link></li>
										<li><Link to="/blog">Domaine D'expertise </Link></li>
										<li><Link to="/blog">Nos Formations</Link></li>
										<li><Link to="/blog">Fiches Métiers</Link></li>
										<li><Link to="/blog">Cértification</Link></li>
										<li><Link to="/blog">Actualités</Link></li>
										<li><Link to="/blog">Consulting</Link></li>

									</ul>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				
			</footer>

		)
	}
}


export default Footer_v2
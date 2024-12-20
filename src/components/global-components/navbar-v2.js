import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const NavbarV2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [domaines, setDomaines] = useState([]); // État pour stocker les données

  useEffect(() => {
	  axios
	.get('http://localhost:4500/api/domaine/all') // Remplacer par votre endpoint exact
	.then((response) => {
	  setDomaines(response.data.data);
	  console.log("domaine",response.data.data[0].
		domaineNom
		)

	  console.log('Message donnée',response.data.data); 
	  // Stocker les données dans l'état
	})
	.catch((error) => {
	  console.error('Erreur lors de la récupération des Domaines:', error);
	});
}, []);

  useEffect(() => {
    const $ = window.$;
    $("body").removeClass("home-3");
  }, []); // S'exécute une fois après le rendu initial

  const publicUrl = process.env.PUBLIC_URL + "/";
  const imgattr = "logo";
 

  return (
    <div className="navbar-area">
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-md-left text-center">
              <ul>
                <li>
                  <p>
                    <i className="fa fa-phone" /> (+216) 71 90 54 90
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-envelope-o" /> contact@exifod.com
                  </p>
                </li>
                <li>
                  <a href={`${publicUrl}assets/img/catalogue.pdf`}>
                    <p>
                      <i className="fa fa-download"></i> Télécharger le
                      catalogue
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="topbar-right text-md-right text-center">
                <li className="social-area">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-area-2 navbar-area navbar-expand-lg go-top">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              className={`menu toggle-btn d-block d-lg-none ${
                isOpen ? "open" : ""
              }`}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/home-v2">
              <img src={`${publicUrl}assets/img/logo3.png`} alt={imgattr} />
            </Link>
          </div>
          <div
            className={`collapse navbar-collapse ${isOpen ? "sopen" : ""}`}
            id="edumint_main_menu"
          >
            <ul className="navbar-nav menu-open">
              <li className="menu-item-has-children">
                <Link to="/home-v2">Accueil</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/domaine-dexpertise">Domaine D'expertise</Link>
                <ul className="sub-menu">
                  <ul>
                    <li>
                      <Link to="sousdomaine-dexpertise/1">
                        Projets et programmes <li>de développement</li>
                      </Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/2">Oil & Gas</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/3">Développement durable</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/4">Changement climatique</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="sousdomaine-dexpertise/5">Passation des marchés</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/6">Finance et comptabilité</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/7">
                        Management des <li>ressources humaines</li>
                      </Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/8">
                        Modernisation de <li>l'administration publique</li>
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="sousdomaine-dexpertise/9">Finances publiques</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/10">Santé publique</Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/11">
                        Agriculture, nutrition <li>et sécurité alimentaire</li>
                      </Link>
                    </li>
                    <li>
                      <Link to="sousdomaine-dexpertise/12">
                        Wash (water, sanitation <li>and hygiene)</li>
                      </Link>
                    </li>
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
  );
};

export default NavbarV2;

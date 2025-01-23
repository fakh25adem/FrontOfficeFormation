import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const NavbarV2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  useEffect(() => {
    const $ = window.$;
    $("body").removeClass("home-3");
  }, []); // S'exécute une fois après le rendu initial

  const publicUrl = process.env.PUBLIC_URL + "/";
  const imgattr = "logo";
  console.log('process.env', process.env)
 

  return (
    <div className="navbar-area">
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-md-left text-center">
              <ul>
                <li>
                  <p>
                    <i className="fa fa-phone" /> (+216) 71 90 54 29
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
            <Link to="/">
              <img src={`${publicUrl}assets/img/logo3.png`} alt={imgattr} />
            </Link>
          </div>
          <div
            className={`collapse navbar-collapse ${isOpen ? "sopen" : ""}`}
            id="edumint_main_menu"
          >
            <ul className="navbar-nav menu-open" style={{margin:'7px'}}>
              <li className="menu-item-has-children">
                <Link to="/">Accueil</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/domaine-dexpertise">Domaine D'expertise</Link>
                <ul className="sub-menu">
                  <ul>
                    <li>
                      <Link to="/sousdomaine-dexpertise/1">
                        Projets et programmes <li>de développement</li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/2">Mines – Oil & Gas</Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/3">Modélisation et analyse<li> des données</li></Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/4">Environnement–<li>Développement durable</li><li>et social</li></Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/13">Infrastructures & gestion<li> urbaine</li></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/sousdomaine-dexpertise/5">Passation des marchés</Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/6">Finance et comptabilité</Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/7">
                        Management des <li>ressources humaines <li>et des organisations</li></li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/8">
                      Finances publiques
                      </Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/14">Décentralisation &<li> gouvernance locale</li></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/sousdomaine-dexpertise/9">Santé publique</Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/10">Agriculture, nutrition <li>et sécurité alimentaire</li></Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/11">
                      Wash (water, sanitation <li>and hygiène)</li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/12">
                      Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/sousdomaine-dexpertise/15">
                      Informatique – systèmes<li> d’informations – <li>télécommunication</li></li>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="menu-item-has-children">
              <Link to="/formation">Nos Formation</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/blog">Fiches Métiers</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/contact">Certification</Link>
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

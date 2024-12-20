import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Temoignages extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div class="testimonial-section">
    <h2>Témoignages</h2>
    <div class="testimonial-carousel">
      <button  class="carousel-control prev" >←</button>
      <div class="carousel-track-container">
        <ul class="carousel-track">
          <li class="carousel-slide" >
            <img  src={publicUrl+"assets/img/team/adam.png"} alt="img" />
            <h3>Adam</h3>
            <p>chef d'équipe</p>
            <div class="testimonial-text">
                <p id="testimonial-content text-center">J'ai participé à une formation intensive en gestion de projets et programmes de développement.
                    Cette expérience m'a doté d'une compréhension approfondie des méthodologies comme le cycle de vie des projets, la gestion des risques et l'évaluation de l'impact.
                    Les études de cas pratiques m'ont permis d'appliquer mes connaissances dans des contextes réels. Grâce à cette formation.</p>
            </div>
          </li>
          <li class="carousel-slide" >
          <img  src={publicUrl+"assets/img/team/fatima.jpg"} alt="img" />
          <h3>Fatima G</h3>
            <p>Professionnelle d'exploration-production</p>
            <div class="testimonial-text ">
                <p id="testimonial-content text-center">Ma participation à une formation continue en Oil & Gas a été essentielle pour mon développement professionnel. J'ai acquis des compétences avancées en gestion des opérations pétrolières et gazières, ainsi qu'en sécurité industrielle. Les sessions pratiques et les études de cas m'ont permis de mieux comprendre les défis spécifiques du secteur. Grâce à cette formation, j'ai pu proposer des solutions innovantes à mon équipe et améliorer notre efficacité opérationnelle. Je recommande vivement cette formation à tous les professionnels désireux de se spécialiser et d'évoluer dans l'industrie Oil &amp Gas.</p>
            </div>
          </li>
          <li class="carousel-slide" >
            <img  src={publicUrl+"assets/img/team/sophie.jpeg"} alt="img" />
            <h3>Sophie T</h3>
            <p>Management</p>
            <div class="testimonial-text">
                <p id="testimonial-content text-center">J'ai récemment participé à une formation intensive en management d'équipe. Grâce à des modules structurés sur la communication, la résolution de conflits et le leadership, j'ai considérablement renforcé mes compétences.
                Les simulations de situations réelles m'ont permis d'appliquer directement les techniques apprises. Cette formation a été cruciale pour ma promotion récente en tant que chef d'équipe dans mon entreprise. Je recommande vivement cette formation à tous ceux qui souhaitent développer leurs capacités de gestion efficacement.</p>
            </div>
          </li>
        </ul>
      </div>
      <button class="carousel-control next">→</button>
    </div>
  </div>
  
        }
}

export default Temoignages

import React, { useState } from 'react';

const Temoignages = () => {
  const publicUrl = process.env.PUBLIC_URL + '/';

  // Témoignages (données simulées)
  const témoignages = [
    {
      img: "assets/img/team/adam.png",
      nom: "Adam",
      titre: "Chef d'équipe",
      texte: "J'ai participé à une formation intensive en gestion de projets et programmes de développement. Cette expérience m'a doté d'une compréhension approfondie des méthodologies comme le cycle de vie des projets, la gestion des risques et l'évaluation de l'impact. Les études de cas pratiques m'ont permis d'appliquer mes connaissances dans des contextes réels. Grâce à cette formation."
    },
    {
      img: "assets/img/team/fatima.jpg",
      nom: "Fatima G",
      titre: "Professionnelle d'exploration-production",
      texte: "Ma participation à une formation continue en Oil & Gas a été essentielle pour mon développement professionnel. J'ai acquis des compétences avancées en gestion des opérations pétrolières et gazières, ainsi qu'en sécurité industrielle. Les sessions pratiques et les études de cas m'ont permis de mieux comprendre les défis spécifiques du secteur. Grâce à cette formation, j'ai pu proposer des solutions innovantes à mon équipe et améliorer notre efficacité opérationnelle."
    },
    {
      img: "assets/img/team/sophie.jpeg",
      nom: "Sophie T",
      titre: "Management",
      texte: "J'ai récemment participé à une formation intensive en management d'équipe. Grâce à des modules structurés sur la communication, la résolution de conflits et le leadership, j'ai considérablement renforcé mes compétences. Les simulations de situations réelles m'ont permis d'appliquer directement les techniques apprises. Cette formation a été cruciale pour ma promotion récente en tant que chef d'équipe dans mon entreprise."
    }
  ];

  // Hook d'état pour gérer l'index du témoignage actuel
  const [index, setIndex] = useState(0);

  // Fonction pour naviguer au témoignage précédent
  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? témoignages.length - 1 : prevIndex - 1));
  };

  // Fonction pour naviguer au témoignage suivant
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === témoignages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-section">
      <h2>Témoignages</h2>
      <div className="testimonial-carousel">
        <button className="carousel-control prev" onClick={prevTestimonial}>←</button>
        <div className="carousel-track-container">
          <ul className="carousel-track">
            <li className="carousel-slide">
              <img src={publicUrl + témoignages[index].img} alt={témoignages[index].nom} />
              <h3>{témoignages[index].nom}</h3>
              <p>{témoignages[index].titre}</p>
              <div className="testimonial-text">
                <p>{témoignages[index].texte}</p>
              </div>
            </li>
          </ul>
        </div>
        <button className="carousel-control next" onClick={nextTestimonial}>→</button>
      </div>
    </div>
  );
};

export default Temoignages;

import React, { useState } from "react";
import axios from "axios";
import { FaStream,FaSwatchbook } from "react-icons/fa";


const App = () => {
  const [formData, setFormData] = useState({
    civilite: "",
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    postOccupe: "",
    organisme: "",
    pays: "",
    modeFormation: "",
    theme: "",
    dateDebut: "",
    dateFin: "",
    lieu: "",
    nombrePersonnes: "",
    financement: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "Ce champ est obligatoire.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:4500/api/form", formData)
        .then((response) => {
          console.log("Données envoyées avec succès :", response.data);
          alert("Formulaire envoyé !");
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi :", error);
        });
    }
  };

  return (
    <div className="container6">
      <div className="left-section">
      <div className="icon-container">
      <FaStream className="icon" />
        <h3>Présentation</h3>
        </div>
        <p>
        En plus des formations sur catalogue et nos cursus de formation, notre service de formation organise des formations élaborées selon les besoins de nos clients. EXIFOD propose des formations sur mesure et personnalisées, pour répondre au mieux aux besoins de votre organisme et de vos équipes, toutes nos formations sont déclinables en formations sur mesure afin de répondre à vos attentes. Ce mode de formation présente une multitude d’avantages qui en font un choix judicieux pour votre entreprise. En effet, lorsque vous optez d’un programme sur- mesure, vous bénéficiez d’un parcours créé spécifiquement pour vous, alliant nos contenus experts et nos multiples pédagogies pour vous offrir le meilleur.        </p>
        <div className="icon-container">
        <FaSwatchbook className="icon1" />
        <h3>Étapes</h3>
        </div>
        <ul>
          <li><strong>Expression de votre besoin :</strong> Prise de contact avec EXIFOD – Formalisation de votre besoin de formation.</li>
          <li><strong>Échange avec EXIFOD sur votre besoin :</strong> Précisions sur l’expression de votre besoin, attentes…</li>
          <li><strong>Réception de notre proposition de formation :</strong> EXIFOD vous fait parvenir sa proposition pédagogique et financière.</li>
          <li><strong>Animation de la formation :</strong> La formation se déroule dans vos locaux.</li>
          <li><strong>Évaluation de la formation : </strong>La formation est évaluée à chaud, dès sa clôture. Un bilan de ces évaluations est réalisé.</li>
        </ul>
        <div className="icon-container">
        <FaStream className="icon2" />
        <h3>Critères</h3>
        </div>
        <ul>
            <li>Lieu : la formation sur mesure se déroule à l’endroit de votre choix.</li>
            <li>Programme : le programme sur mesure est entièrement adapté à vos exigences et aux spécificités de votre entreprise, nos experts prennent en compte vos besoins spécifiques afin de concevoir des formations qui  répondent parfaitement à vos attentes.</li>
            <li>Durée : La formation sur mesure vous permet de bénéficier de la flexibilité et de la pertinence de nos programmes entièrement personnalisés (lieu, date), adaptés à vos besoins et à l’identité de votre organisation.</li>
        </ul>
      </div>
      <div className="right-section">
    <h2>Inscription sur mesure</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-row1">
        <div className="form-group1">
          <label>Civilité</label>
          <select name="civilite" value={formData.civilite} onChange={handleChange}>
            <option value="">Civilité</option>
            <option value="M.">M.</option>
            <option value="Mme">Mme</option>
          </select>
          {errors.civilite && <p className="error">{errors.civilite}</p>}
        </div>
        <div className="form-group1">
          <label>Prénom *</label>
          <input
            type="text"
            name="prenom"
            placeholder="Votre prénom"
            value={formData.prenom}
            onChange={handleChange}
          />
          {errors.prenom && <p className="error">{errors.prenom}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Nom *</label>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
          />
          {errors.nom && <p className="error">{errors.nom}</p>}
        </div>
        <div className="form-group1">
          <label>N° de téléphone *</label>
          <input
            type="tel"
            name="telephone"
            placeholder="Votre téléphone"
            value={formData.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <p className="error">{errors.telephone}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group1">
          <label>Post Occupé *</label>
          <input
            type="text"
            name="postOccupe"
            placeholder="Votre Post Occupé"
            value={formData.postOccupe}
            onChange={handleChange}
          />
          {errors.postOccupe && <p className="error">{errors.postOccupe}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Organisme/Employeur *</label>
          <input
            type="text"
            name="organisme"
            placeholder="Organisme/Employeur"
            value={formData.organisme}
            onChange={handleChange}
          />
          {errors.organisme && <p className="error">{errors.organisme}</p>}
        </div>
        <div className="form-group1">
          <label>Pays *</label>
          <input
            type="text"
            name="pays"
            placeholder="Pays"
            value={formData.pays}
            onChange={handleChange}
          />
          {errors.pays && <p className="error">{errors.pays}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Mode de formation</label>
          <select
            name="modeFormation"
            value={formData.modeFormation}
            onChange={handleChange}
          >
            <option value="">Choisir un mode</option>
            <option value="En Présentiel">En Présentiel</option>
            <option value="A distance">A distance</option>
          </select>
          {errors.modeFormation && <p className="error">{errors.modeFormation}</p>}
        </div>
        <div className="form-group1">
          <label>Thème *</label>
          <input
            type="text"
            name="theme"
            placeholder="Thème"
            value={formData.theme}
            onChange={handleChange}
          />
          {errors.theme && <p className="error">{errors.theme}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Date de début *</label>
          <input
            type="date"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
          />
          {errors.dateDebut && <p className="error">{errors.dateDebut}</p>}
        </div>
        <div className="form-group1">
          <label>Date de fin *</label>
          <input
            type="date"
            name="dateFin"
            value={formData.dateFin}
            onChange={handleChange}
          />
          {errors.dateFin && <p className="error">{errors.dateFin}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Lieu *</label>
          <input
            type="text"
            name="lieu"
            placeholder="Lieu"
            value={formData.lieu}
            onChange={handleChange}
          />
          {errors.lieu && <p className="error">{errors.lieu}</p>}
        </div>
        <div className="form-group1">
          <label>Nombre de personnes *</label>
          <input
            type="text"
            name="nombrePersonnes"
            placeholder="Nombre de personnes"
            value={formData.nombrePersonnes}
            onChange={handleChange}
          />
          {errors.nombrePersonnes && <p className="error">{errors.nombrePersonnes}</p>}
        </div>
      </div>

      <div className="form-row1">
        <div className="form-group1">
          <label>Source de financement *</label>
          <input
            type="text"
            name="financement"
            placeholder="Source de financement"
            value={formData.financement}
            onChange={handleChange}
          />
          {errors.financement && <p className="error">{errors.financement}</p>}
        </div>
        <div className="form-group1">
          <label>Message *</label>
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
      </div>

      <button type="submit">Demander Devis</button>
    </form>
    </div>

</div>
  );
};

export default App;

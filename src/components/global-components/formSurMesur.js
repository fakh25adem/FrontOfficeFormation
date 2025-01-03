import React, { useState } from "react";
import axios from "axios";
import { FaStream, FaSwatchbook } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
    typeFormation: "", // Pour les boutons radio
    theme: "",
    dateDebut: "",
    dateFin: "",
    lieu: "",
    nombrePersonnes: "",
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
      if (!formData[field] && field !== "typeFormation") {
        newErrors[field] = "Ce champ est obligatoire.";
      }
    }
    if (formData.modeFormation === "A distance" && !formData.typeFormation) {
      newErrors.typeFormation = "Veuillez choisir un type de formation.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:4500/api/form/Mesure", formData)
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
              <label>Civilité *</label>
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
              <PhoneInput
                    country={"tn"} // Pays par défaut
                    value={formData.telephone}
                    onChange={(value) => setFormData({ ...formData, telephone: value })}
                    placeholder="N° téléphone *"
                    inputStyle={{ width: "100%" }}
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
  <select
    name="pays"
    value={formData.pays}
    onChange={handleChange}
  >
    <option value="">-- Choisissez un pays --</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Afrique_Centrale">Afrique_Centrale</option>
    <option value="Afrique_du_Sud">Afrique_du_Sud</option>
    <option value="Albanie">Albanie</option>
    <option value="Algerie">Algerie</option>
    <option value="Allemagne">Allemagne</option>
    <option value="Andorre">Andorre</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Arabie_Saoudite">Arabie_Saoudite</option>
    <option value="Argentine">Argentine</option>
    <option value="Armenie">Armenie</option>
    <option value="Australie">Australie</option>
    <option value="Autriche">Autriche</option>
    <option value="Azerbaidjan">Azerbaidjan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbade">Barbade</option>
    <option value="Bahrein">Bahrein</option>
    <option value="Belgique">Belgique</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermudes">Bermudes</option>
    <option value="Bielorussie">Bielorussie</option>
    <option value="Bolivie">Bolivie</option>
    <option value="Botswana">Botswana</option>
    <option value="Bhoutan">Bhoutan</option>
    <option value="Boznie_Herzegovine">Boznie_Herzegovine</option>
    <option value="Bresil">Bresil</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgarie">Bulgarie</option>
    <option value="Burkina_Faso">Burkina_Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Caiman">Caiman</option>
    <option value="Cambodge">Cambodge</option>
    <option value="Cameroun">Cameroun</option>
    <option value="Canada">Canada</option>
    <option value="Canaries">Canaries</option>
    <option value="Cap_Vert">Cap_Vert</option>
    <option value="Chili">Chili</option>
    <option value="Chine">Chine</option>
    <option value="Chypre">Chypre</option>
    <option value="Colombie">Colombie</option>
    <option value="Comores">Comores</option>
    <option value="Congo">Congo</option>
    <option value="Congo_Democratique">Congo_Democratique</option>
    <option value="Cook">Cook</option>
    <option value="Coree_du_Nord">Coree_du_Nord</option>
    <option value="Coree_du_Sud">Coree_du_Sud</option>
    <option value="Costa_Rica">Costa_Rica</option>
    <option value="Cote_d_Ivoire">Côte_d_Ivoire</option>
    <option value="Croatie">Croatie</option>
    <option value="Cuba">Cuba</option>
    <option value="Danemark">Danemark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominique">Dominique</option>
    <option value="Egypte">Egypte</option>
    <option value="Emirats_Arabes_Unis">Emirats_Arabes_Unis</option>
    <option value="Equateur">Equateur</option>
    <option value="Erythree">Erythree</option>
    <option value="Espagne">Espagne</option>
    <option value="Estonie">Estonie</option>
    <option value="Etats_Unis">Etats_Unis</option>
    <option value="Ethiopie">Ethiopie</option>
    <option value="France">France</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambie">Gambie</option>
    <option value="Georgie">Georgie</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Grece">Grece</option>
    <option value="Grenade">Grenade</option>
    <option value="Groenland">Groenland</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinee">Guinee</option>
    <option value="Guinee_Bissau">Guinee_Bissau</option>
    <option value="Guinee_Equatoriale">Guinee_Equatoriale</option>
    <option value="Guyane_Francaise">Guyane_Francaise</option>
    <option value="Haiti">Haiti</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong_Kong">Hong_Kong</option>
    <option value="Hongrie">Hongrie</option>
    <option value="Inde">Inde</option>
    <option value="Indonesie">Indonesie</option>
    <option value="Iran">Iran</option>
    <option value="Irlande">Irlande</option>
    <option value="Islande">Islande</option>
    <option value="Italie">Italie</option>
    <option value="Japon">Japon</option>
    <option value="Jordanie">Jordanie</option>
    <option value="Kenya">Kenya</option>
    <option value="Liban">Liban</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malaisie">Malaisie</option>
    <option value="Malte">Malte</option>
    <option value="Maroc">Maroc</option>
    <option value="Mexique">Mexique</option>
    <option value="Norvege">Norvege</option>
    <option value="Nouvelle_Caledonie">Nouvelle_Caledonie</option>
    <option value="Nouvelle_Zelande">Nouvelle_Zelande</option>
    <option value="Pays_Bas">Pays_Bas</option>
    <option value="Perou">Perou</option>
    <option value="Philippines">Philippines</option>
    <option value="Portugal">Portugal</option>
    <option value="Reunion">Reunion</option>
    <option value="Royaume_Uni">Royaume_Uni</option>
    <option value="Russie">Russie</option>
    <option value="Senegal">Senegal</option>
    <option value="Singapour">Singapour</option>
    <option value="Slovaquie">Slovaquie</option>
    <option value="Sri_Lanka">Sri_Lanka</option>
    <option value="Suede">Suede</option>
    <option value="Suisse">Suisse</option>
    <option value="Tchad">Tchad</option>
    <option value="Thailande">Thailande</option>
    <option value="Tunisie">Tunisie</option>
    <option value="Turquie">Turquie</option>
    <option value="Ukraine">Ukraine</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Zambie">Zambie</option>
    <option value="Zimbabwe">Zimbabwe</option>
  </select>
  {errors.pays && <p className="error">{errors.pays}</p>}
</div>

          </div>

          <div className="form-row1">
            <div className="form-group1">
              <label>Mode de formation *</label>
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

              <div className={`radio-group ${formData.modeFormation === "A distance" ? "active" : ""}`}>

                <label> Participer en ligne
                  <input
                    type="radio"
                    name="typeFormation"
                    value="Participer en ligne"
                    onChange={handleChange}
                    checked={formData.typeFormation === "Participer en ligne"}
                  />
                </label>
                <label> E-learning
                  <input
                    type="radio"
                    name="typeFormation"
                    value="E-learning"
                    onChange={handleChange}
                    checked={formData.typeFormation === "E-learning"}
                  />
                </label>
                <label> Classe virtuelle
                  <input
                    type="radio"
                    name="typeFormation"
                    value="Classe virtuelle"
                    onChange={handleChange}
                    checked={formData.typeFormation === "Classe virtuelle"}
                  />
                </label>
              </div>
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
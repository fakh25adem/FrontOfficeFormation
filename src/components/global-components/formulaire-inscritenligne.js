import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormulaireInscriptionEnLigne = () => {
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
    date: "",
    nombrePersonnes: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [displayCatalogue, setDisplayCatalogue] = useState(false);
  const [displaySurMesure, setDisplaySurMesure] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCatalogueClick = () => {
    setDisplayCatalogue(true);
    setDisplaySurMesure(false);
    setFormData({ ...formData, modeFormation: "Sur Catalogue" });
  };

  const handleSurMesureClick = () => {
    setDisplayCatalogue(false);
    setDisplaySurMesure(true);
    setFormData({ ...formData, modeFormation: "Sur Mesure" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formData) {
      if (!formData[field] && field !== "typeFormation" && field !== "theme" && field !== "date" && field !== "nombrePersonnes") {
        newErrors[field] = "Ce champ est obligatoire.";
      }
    }
    if (formData.modeFormation === "Sur Catalogue" && !formData.typeFormation) {
      newErrors.typeFormation = "Veuillez choisir un type de formation.";
    }
    if (formData.modeFormation === "Sur Mesure") {
      if (!formData.theme) {
        newErrors.theme = "Le thème est obligatoire pour une formation sur mesure.";
      }
      if (!formData.date) {
        newErrors.date = "La date est obligatoire pour une formation sur mesure.";
      }
      if (!formData.nombrePersonnes) {
        newErrors.nombrePersonnes = "Le nombre de personnes est obligatoire pour une formation sur mesure.";
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:4500/api/form/Inscription", formData)
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
    <div className="inscription-form-container">



      <h2 className="inscription-title mg-top--250">Inscription en Ligne</h2>

      <form className="inscription-form" onSubmit={handleSubmit}>
        <div className="form-group11">
          <label>Civilité *</label>
          <select name="civilite" value={formData.civilite} onChange={handleChange}>
            <option value="">Civilité</option>
            <option value="M.">M.</option>
            <option value="Mme">Mme</option>

          </select>
          {errors.civilite && <p className="error">{errors.civilite}</p>}
        </div>
        <div className="form-row1">
          <div className="form-group11">
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
          <div className="form-group11">
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
        </div>
        <div className="form-row1">

        <div className="form-group11">
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

          <div className="form-group11">
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
        </div>
        <div className="form-row1">
          <div className="form-group11">
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

          <div className="form-group11">
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
        </div>
        <div className="form-row1">
          <div className="form-group11">
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

          {/* Mode de formation */}
          {/* Mode de formation */}
          <div className="form-group11">
            <label>Mode de la formation *</label>
            <div className="button-group">
              <button
                type="button"
                className={`btn-catalogue ${formData.modeFormation === "Sur Catalogue" ? "active" : ""
                  }`}
                onClick={handleCatalogueClick}
              >
                Sur Catalogue
              </button>
              <button
                type="button"
                className={`btn-sur-mesure ${formData.modeFormation === "Sur Mesure" ? "active" : ""
                  }`}
                onClick={handleSurMesureClick}
              >
                Sur Mesure
              </button>
            </div>
          </div>

          {displayCatalogue && (
            <div className="form-group11">
              <label>Sélectionnez une option :</label>
              <select
                name="typeFormation"
                value={formData.typeFormation}
                onChange={handleChange}
              >
                <option value="">-- Choisissez une option --</option>
                <option value="Présentiel">-- En Présentiel</option>
                <option value="enLigne">-- Participer en ligne</option>
                <option value="eLearning">-- E-learning</option>
              </select>
              {errors.typeFormation && <p className="error">{errors.typeFormation}</p>}
            </div>
          )}

          {displaySurMesure && (
            <div className="form-group11">
              <label>Thème :</label>
              <input
                type="text"
                id="theme"
                name="theme"
                placeholder="Entrez le thème"
                className="form-input"
                value={formData.theme}
                onChange={handleChange}
              />
              {errors.theme && <p className="error">{errors.theme}</p>}

              <label>Date :</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}

              <label>Nombre de personnes :</label>
              <input
                type="number"
                id="nombrePersonnes"
                name="nombrePersonnes"
                placeholder="Entrez le nombre de personnes"
                className="form-input"
                value={formData.nombrePersonnes}
                onChange={handleChange}
                
              />
              {errors.nombrePersonnes && (
                <p className="error">{errors.nombrePersonnes}</p>
              )}
            </div>
          )}
        </div>



        <div className="form-row1">
          <div className="form-group11">
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
  );
};

export default FormulaireInscriptionEnLigne;
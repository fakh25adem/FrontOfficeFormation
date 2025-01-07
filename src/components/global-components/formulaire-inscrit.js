import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FormulaireInscrit = () => {
  const location = useLocation();
  const { formation = {}, mode = "Non sélectionné" } = location.state || {};
  const [formDataFormulaire, setFormDataFormulaire] = useState(location.state.formation)
  const [formData, setFormData] = useState({
    civility: "M.",
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    employeur: "",
    pays: "",
    date: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      mode,
      formationNom: formation.formationNom || "N/A",
      formationCode: formation.formationCode || "N/A",
      formationDuree: formation.formationDuree || "N/A",
      formationLangue: formation.formationLangue || "N/A",
    };

    try {
      const response = await axios.post(
        "http://localhost:4500/api/form/Sinscrire",
        dataToSend
      );
      setSuccess("Inscription réussie !");
      setError("");
      console.log("Réponse de l'API :", response.data);
    } catch (err) {
      setError("Une erreur est survenue lors de l'inscription.");
      setSuccess("");
      console.error("Erreur de l'API :", err);
    }
  };

  return (
    <div className="container22">
      <div className="header22">
        <h2>Formulaire d'inscription</h2>
        <p className="description">{formation?.formationNom || "N/A"}</p>
        <p>
          <strong>Code de la formation:</strong> {formation?.formationCode || "N/A"}
        </p>
        <p>
          <strong>Durée de la formation:</strong> {formation?.formationDuree || "N/A"}
        </p>
        <p>
          <strong>Langue de la formation:</strong> {formation?.formationLangue || "N/A"}
        </p>
        <p>
          <strong>Mode de la formation:</strong> {mode || "Non sélectionné"}
        </p>
      </div>

      {success && <p className="success-message">{success}</p>}
      {error && <p className="error-message">{error}</p>}

      <form className="form" onSubmit={handleSubmit}>
        <select
          name="civility"
          className="form-control"
          value={formData.civility}
          onChange={handleInputChange}
        >
          <option value="M.">M.</option>
          <option value="Mme">Mme</option>
        </select>

        <input
          type="text"
          name="prenom"
          placeholder="Prénom *"
          className="form-control"
          value={formData.prenom}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="nom"
          placeholder="Nom *"
          className="form-control"
          value={formData.nom}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="form-control"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <PhoneInput
          country={"tn"}
          placeholder="N° téléphone *"
          value={formData.telephone}
          inputStyle={{ width: "100%" }}
          onChange={(value) => setFormData({ ...formData, telephone: value })}
        />
        <input
          type="text"
          name="employeur"
          placeholder="Employeur *"
          className="form-control"
          value={formData.employeur}
          onChange={handleInputChange}
          required
        />
        <select
          name="pays"
          className="form-control"
          value={formData.pays}
          onChange={handleInputChange}
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
        <input
          type="date"
          name="date"
          placeholder="Date"
          className="form-control"
          value={formData.date}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message *"
          className="form-control"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" className="btn-submit">
          ENVOYER
        </button>
      </form>
    </div>
  );
};

export default FormulaireInscrit;

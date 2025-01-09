import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const FormFormateur = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cv: null,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('firstName', formData.firstName);
        data.append('lastName', formData.lastName);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('cv', formData.cv);
        data.append('message', formData.message);

        try {
            const response = await axios.post('http://localhost:4500/api/form/Form', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Réponse du serveur:', response.data);
            alert('Formulaire soumis avec succès!');
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
            alert("Une erreur est survenue lors de l'envoi du formulaire.");
        }
    };

    return (
        <div className="formateur-container">
            <h2>Espace formateur</h2>
            <form className="formateur-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Prénom *"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Nom *"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <PhoneInput
                    country={"tn"} // Pays par défaut
                    value={formData.phone}
                    name="phone"

                    onChange={(value) => setFormData({ ...formData, phone: value })}
                    placeholder="N° téléphone *"
                    inputStyle={{ width: "100%",height:'42px' }}
                />

                <label className="file-upload-label">
                    Télécharger CV *
                    <input
                        type="file"
                        name="cv"
                        className="file-upload-input"
                        onChange={handleChange}
                        required
                    />
                </label>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <div className="form-row">
         <div className="col-12">
         <center><button type="submit">Envoyer</button></center>
          </div>
          
          </div>
                
            </form>
        </div>
    );
};

export default FormFormateur;

import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Vous pouvez ajouter ici une logique pour envoyer les données au serveur
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
                <input
                    type="tel"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
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
                <button type="submit" className="btn-submit">
                    ENVOYER
                </button>
            </form>
        </div>
    );
};

export default FormFormateur;

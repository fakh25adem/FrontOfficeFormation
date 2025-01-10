import React from 'react';

const VisitTourist = () => {
    const publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div className="Visa">
            <p>
                En cas de difficultés administratives ou bureaucratiques, EXIFOD offre un soutien expert et personnalisé pour naviguer à travers les processus complexes de demande de visa. Son assistance va au-delà de simples conseils : elle inclut souvent des services de conseil sur les documents requis, des contacts directs avec les autorités consulaires, et des orientations sur les démarches à suivre pour maximiser les chances de succès.
            </p>

            <div className="tourist-section">
                <h2 className="section-title">Tunisie</h2>
                <div className="image-grid">
                    <div className="image-block"><img src={publicUrl + "assets/img/1.jpg"} alt="Tunisie 1" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/2.jpg"} alt="Tunisie 2" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/3.jpg"} alt="Tunisie 3" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/4.jpg"} alt="Tunisie 4" /></div>
                </div>
            </div>

            <div className="tourist-section">
                <h2 className="section-title">Casablanca</h2>
                <div className="image-grid">
                    <div className="image-block"><img src={publicUrl + "assets/img/c1.png"} alt="Casablanca 1" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/c2.jpg"} alt="Casablanca 2" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/c3.png"} alt="Casablanca 3" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/c4.avif"} alt="Casablanca 4" /></div>
                </div>
            </div>

            <div className="tourist-section">
                <h2 className="section-title">Dubaï</h2>
                <div className="image-grid">
                    <div className="image-block"><img src={publicUrl + "assets/img/d1.png"} alt="Dubaï 1" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/d2.png"} alt="Dubaï 2" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/d3.png"} alt="Dubaï 3" /></div>
                    <div className="image-block"><img src={publicUrl + "assets/img/d4.png"} alt="Dubaï 3" /></div>

                </div>
            </div>
        </div>
    );
};

export default VisitTourist;

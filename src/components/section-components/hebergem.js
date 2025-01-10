import React from 'react';

const Hebergem = () => {
    const publicUrl = process.env.PUBLIC_URL + "/";

    return (
        <div className="Visa mg-top-120">
            <p>
                Notre engagement envers votre confort et votre satisfaction commence dès que vous réservez votre séjour avec nous. Nous nous efforçons de vous offrir un service d'hébergement exceptionnel dans nos hôtels, en veillant à ce que chaque détail soit pris en compte pour répondre à vos besoins et à vos attentes. Notre équipe dédiée est à votre disposition pour vous offrir un accueil chaleureux et pour vous assister tout au long de votre séjour. De la réservation initiale à votre départ, nous nous engageons à rendre votre expérience aussi agréable et sans souci que possible, afin que vous puissiez vous concentrer pleinement sur votre séjour parmi nous.</p>
            <div className="image-grid">
                <div className="image-block"><img src={publicUrl+"assets/img/team/1.jpg"} alt="Hôtel 1" /></div>
                <div className="image-block"><img src={publicUrl+"assets/img/team/2.jpg"} alt="Hôtel 2" /></div>
                <div className="image-block"><img src={publicUrl+"assets/img/team/3.jpg"} alt="Hôtel 3" /></div>
                <div className="image-block"><img src={publicUrl+"assets/img/team/4.jpg"} alt="Hôtel 4" /></div>
                <div className="image-block"><img src={publicUrl+"assets/img/team/5.jpg"} alt="Hôtel 5" /></div>
            </div>

        </div>
    );
};
export default Hebergem
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Instructor = () => {
  const publicUrl = process.env.PUBLIC_URL + "/";

  const instructors = [
    { id: 1, role: "admin-4 juin 2024", name: "Acheteur", image: publicUrl + "assets/img/icon/a1.jpg" },
    { id: 2, role: "admin-20 août 2022", name: "Admin earns scholarship", image: publicUrl + "assets/img/icon/a2.jpg" },
    { id: 3, role: "admin-4 juin 2024", name: "Administrateur réseaux télécoms", image: publicUrl + "assets/img/icon/a3.jpg" },
    { id: 4, role: "admin-4 juin 2024", name: "Architecte", image: publicUrl + "assets/img/icon/a4.jpg" },
    { id: 5, role: "admin-4 juin 2024", name: "Architecte informatique/SI", image: publicUrl + "assets/img/icon/a5.jpg" },
    { id: 6, role: "admin-4 juin 2024", name: "Acheteur", image: publicUrl + "assets/img/icon/a1.jpg" },

];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  const prevInstructor = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const nextInstructor = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= instructors.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleInstructors = instructors.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="team-area pd-top-120 pd-bottom-70 go-top" style={{backgroundImage: 'url('+publicUrl+'assets/img/institute/a6.jpg)',
	}}>
      <div className="container2">
        <h2 className="section-title1">Nos Instructeurs</h2>
        <div className="carousel-wrapper1">
          <button className="carousel-control1 prev1" onClick={prevInstructor}>
            &#8592;
          </button>
          <div className="carousel-content1">
            {visibleInstructors.map((instructor) => (
              <div className="single-team-inner1" key={instructor.id}>
                <div className="thumb">
                  <img src={instructor.image} alt={instructor.name} />
                </div>
                <div className="details">
                  <h6>
                    <Link to="/instructor-details">{instructor.name}</Link>
                  </h6>
                  <span>{instructor.role}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control1 next1" onClick={nextInstructor}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;

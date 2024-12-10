import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import Certifications from './certification';

class FormationCertification extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'


    return <div className="team-area pd-top-60 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center">
                    <h2 className="title">Formation Certifiantes : EXP</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-team-inner">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/team/cert3.jpg"} alt="img" />
                      
                    </div>
                    <div className="details"> 
                      <h5><Link to="/instructor-details">Le lorem ipsum est, en imprimerie</Link></h5>
                      <span><Link to="/instructor-details">Fiche formation </Link></span>
                    </div>  
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-team-inner">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/team/cert4.jpg"} alt="img" />
                      
                    </div>
                    <div className="details"> 
                      <h5><Link to="/instructor-details">Le lorem ipsum est, en imprimerie</Link></h5>
                      <span><Link to="/instructor-details">Fiche formation </Link></span>
                    </div>  
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-team-inner">
                    <div className="thumb">
                      <img src={publicUrl+"assets/img/team/cert5.jpg"} alt="img" />
                      
                    </div>
                    <div className="details"> 
                      <h5><Link to="/instructor-details">Le lorem ipsum est, en imprimerie</Link></h5>
                      <span><Link to="/instructor-details">Fiche formation </Link></span>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>

        }
}

export default FormationCertification
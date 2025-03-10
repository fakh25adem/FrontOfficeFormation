import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TeamV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-area bg-light-green pd-top-120 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7">
			        <div className="section-title text-center">
			          <h6 className="sub-title style-btn">Meet Our Team</h6>
			          <h2 className="title">Our Creative Team</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/1.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Doris Jordan</Link></h4>
			            <span>Design Expert</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/2.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Eugen Freman</Link></h4>
			            <span>Executive</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/3.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Jaction Leo</Link></h4>
			            <span>Developer</span>
			          </div>  
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default TeamV2
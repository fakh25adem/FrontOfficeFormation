import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-2" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/2.png")'}}>
		  <div className="container">
		    <div className="row">
		        <div className="banner-inner style-white text-center text-lg-left">
		          <h1 className="b-animate-2 title">Les Experts Internationaux</h1>
				  <h3 className="b-animate-1 sub-title">Formation. Organisation. Développement</h3>
		          <ul><Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/about">Découvrire</Link></ul>
		        </div>
		    </div>
		  </div>
		</div>

        }
}

export default BannerV2
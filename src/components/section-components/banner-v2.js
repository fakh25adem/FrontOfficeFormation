import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-2" >
		<video 
    autoPlay 
    muted 
    loop 
    playsInline 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: '-1',
    }}
  >
    <source src={publicUrl + 'assets/img/banner/bg-vd.mp4'} type="video/mp4" />
  </video>
		  <div className="container">
		    <div className="row">
		        <div className="banner-inner style-white text-center text-lg-left">
		          <h1 className="b-animate-2 title text-center">Les Experts Internationaux</h1>
				  <h3 className="b-animate-1 sub-title">Formation. Organisation. Développement</h3>
		          <ul><Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/decouvrir">Découvrir</Link></ul>
		        </div>
		    </div>
		  </div>
		</div>

        }
}

export default BannerV2
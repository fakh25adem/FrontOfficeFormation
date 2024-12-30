import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header1 extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (


	<div className="page-header3-area " style={{backgroundImage: 'url('+publicUrl+'assets/img/institute/Eduma-cover-banner-17.jpg)'}} >
	  <div className="container">
	    <div className="page-header3-inner">
	      <div className="section-title ">
	        <h2 className="page-title">{ HeaderTitle }</h2>
	        <ul className="page-list">
	        </ul>
	      </div>
	    </div>
	  </div>
	</div>



        )
    }
}


export default Page_header1
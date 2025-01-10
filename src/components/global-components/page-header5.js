import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header5 extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        
        return (


	<div className="Nos-avantage-header " >
	  <div className="Nos-avantage-header-container mg-top-160">
	    <div className="Nos-avantage-header-inner mg-top-160">
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


export default Page_header5
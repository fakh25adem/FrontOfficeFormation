import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header2 extends Component {
    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (
	<div className="page-header2-area " >
	  <div className="container">
	    <div className="page-header2-inner">
	      <div className="section-title mb-0 text-center">
	        <h2 className="page-title"> Nos références
            </h2>
	        <ul className="page-list">
                <div className="references-area">
                    <div className="references-grid">
                        <div className="reference-item">
                            <img src={publicUrl+"assets/img/icon/part1.png"} alt="img" />
                        </div>
                        <div className="reference-item">
                            <img src={publicUrl+"assets/img/icon/part2.png"} alt="img" />
                        </div>
                        <div className="reference-item">
                            <img src={publicUrl+"assets/img/icon/part3.png"} alt="img" />
                        </div>
                        <div className="reference-item">
                            <img src={publicUrl+"assets/img/icon/part4.png"} alt="img" />
                        </div>
                    </div>
                </div>
	        </ul>
	      </div>
	    </div>
	  </div>
	</div>

        )
    }
}


export default Page_header2
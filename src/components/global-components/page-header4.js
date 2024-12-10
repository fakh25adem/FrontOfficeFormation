import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header4 extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (


            <div className="page-header4-area">
            <div className="container">
                <div className="page-header4-inner">
                    <div className="section-title">
                        <h2 className="page-title">Oo2 Consulting</h2>
                        
                    </div>
                    <p className="page-list">
                            ACCOMPAGNEMENT - CONSEIL - AUDIT
                        </p>
                    <p className="subtitle">
                        Innover, se transformer, optimiser : nous vous aidons à créer
                        les composantes d'une entreprise performante tout en assurant
                        une bonne conduite du changement.
                    </p>
                </div>
            </div>
        </div>
        



        )
    }
}


export default Page_header4
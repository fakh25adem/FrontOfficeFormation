import React from 'react';
import Navbar from './global-components/navbar-v2';
import Banner from './section-components/banner-v2';
import Intro from './section-components/intro-v2';
import About from './section-components/about-v2';
import Client from './section-components/client';
import HowToWork from './section-components/how-to-work';
import Temoignages from './section-components/temoignages';
import PageHeader2 from './global-components/page-header2';
import Footer from './global-components/footer-v2';
import Scrollp from './Scroll-Parallax/scrollp';
import { Link } from 'react-router-dom';

const Home_V2 = () => {
   
    return <div>
        <Navbar />
        <Banner />
        <Intro />
        <About />
        <Temoignages/>
         <Client />
         <HowToWork />
         <PageHeader2 />   
        <Footer />
        <Scrollp/>
        <div className="fixed-buttons">
        <Link to="/Formateur">
            <button className="btn btn-primary">Devenir formateur</button>
            </Link>            
            <Link to="/InscriptionEnLigne" >         
            <button className="btn btn-secondary">Inscription en ligne</button>
            </Link>          </div>
    </div>
}

export default Home_V2


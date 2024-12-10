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
            <button className="btn btn-primary"><p>Devenir formateur</p></button>
            <button className="btn btn-secondary"><p>Inscription en ligne</p></button>
        </div>
    </div>
}

export default Home_V2


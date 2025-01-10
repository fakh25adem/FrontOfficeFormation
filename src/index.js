import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import Course from './components/course';
import CourseDetails from './components/course-details';
import About from './components/about';
import Event from './components/event';
import EventDetails from './components/event-details';
import Instructor from './components/instructor';
import InstructorDetails from './components/instructor-details';
import Pricing from './components/pricing';
import Gallery from './components/gallery';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import DomaineDexpertise from './components/domaine-dexpertise';
import SousdomaineDexpertise from './components/sousdomaine-dexpertise';
import Formation from './components/formation';
import FormMesur from './components/Form-Mesure';
import Inscription from './components/inscription';
import Formateur from './components/formateur';
import InscriptionEnLigne from './components/inscrit-enligne';
import CursusForm from './components/cursus-form';
import ResultatRech from './components/resultat-rech';
import RechercheResult from './components/recherche-result';
import VisaPage from './components/visa';
import HebegrementPage from './components/hebegrement';
import AccueilTransfertPage from './components/accueil-transfert';
import VisiteTouristPage from './components/visite-touristique';
class Root extends Component {
    render() {
        return(
            <Router basename="/">
                <div>
                    <Switch>
                        <Route exact path="/" component={HomeV2} />
                        <Route exact path="/home-v3" component={HomeV3} />
                        <Route exact path="/course" component={Course} />
                        <Route exact path="/course-details/:formationCode" component={CourseDetails} />
                        <Route exact path="/decouvrir" component={About} />
                        <Route exact path="/event" component={Event} />
                        <Route exact path="/event-details" component={EventDetails} />
                        <Route exact path="/instructor" component={Instructor} />
                        <Route exact path="/instructor-details" component={InstructorDetails} />
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/sign-in" component={SignIn} />
                        <Route exact path="/sign-up" component={SignUp} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog-details" component={BlogDetails} />
                        <Route exact path="/domaine-dexpertise" component={DomaineDexpertise} />
                        <Route exact path="/sousdomaine-dexpertise/:idDomaine" component={SousdomaineDexpertise} />
                        <Route exact path="/formation" component={Formation} />
                        <Route exact path="/FormMesur" component={FormMesur} />
                        <Route exact path="/Inscription" component={Inscription} />
                        <Route exact path="/Formateur" component={Formateur} />
                        <Route exact path="/InscriptionEnLigne" component={InscriptionEnLigne} />
                        <Route exact path="/CursusForm" component={CursusForm} />
                        <Route exact path="/ResultatRech" component={ResultatRech} />
                        <Route exact path="/RechercheResult" component={RechercheResult} />
                        <Route exact path="/VisaPage" component={VisaPage} />
                        <Route exact path="/HebegrementPage" component={HebegrementPage} />
                        <Route exact path="/AccueilTransfertPage" component={AccueilTransfertPage} />
                        <Route exact path="/VisiteTouristPage" component={VisiteTouristPage} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('edumint'));

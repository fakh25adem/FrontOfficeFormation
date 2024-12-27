import React from 'react';

const AboutV6 = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';

    return (
    <div className="pd-top-80"style={{backgroundColor:'#E9E4E4'}}>
            <div className="container" >
                <div className="section-title">
					
                    <h3 className="titleAbout " style={{textAlign:'center',color:'black'}}>Nos atouts pour réussir</h3>
                    <h6 style={{textAlign:'center',color:'black'}}>Pourquoi nous choisir ?</h6>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/p1.png`} alt="img" />
                            </div>
                            <div className="details">
                                <h5 style={{height:'50px'}}>Expertise pédagogique                                </h5>
                                <p>
                                Notre équipe de formateurs hautement qualifiés assure des cours de qualité, adaptés à vos besoins spécifiques pour vos attentes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/p2.png`} alt="img" />
                            </div>
                            <div className="details">
                            <h5 style={{height:'50px'}}>Formation diversifiée</h5>
                                <p>
                                Découvrez notre large gamme de formations, couvrant divers domaines de compétences pour répondre à vos objectifs professionnels.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/p3.png`} alt="img" />
                            </div>
                            <div className="details">
                                
                                <h5 style={{height:'50px'}}>Suivi personnalisé</h5>
                                <p>
                                Bénéficiez d'un suivi individualisé tout au long de votre parcours de formation, avec des conseils pour garantir votre succès.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			</div> 
       
    );
};

export default AboutV6;

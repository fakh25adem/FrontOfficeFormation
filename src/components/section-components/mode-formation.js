import React from 'react';

const AboutV2 = () => {
    const publicUrl = process.env.PUBLIC_URL + '/';

    return (
    <div style={{backgroundColor:'#E9E4E4'}}>
            <div className="container" >
                <div className="section-title">
					
                    <h3 className="titleAbout " style={{textAlign:'center',color:'black'}}>Nos modes de formation :
                    </h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/icon1.png`} alt="img" />
                            </div>
                            <div className="details">
                                <h5 style={{height:'50px'}}>Formation en ligne</h5>
                                <p>
                                Grâce à une plateforme intuitive, EXIFOD permet un apprentissage à distance, à votre propre rythme et selon vos disponibilités. En plus de la flexibilité, EXIFOD réduit les coûts de formation tout en offrant un large éventail de contenus interactifs, permettant ainsi une expérience d'apprentissage optimale et personnalisée.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/icon2.png`} alt="img" />
                            </div>
                            <div className="details">
                                <h5 style={{height:'50px'}}>Formation en présentiel</h5>
                                <p>
                                Grâce à des séances dynamiques, les apprenants bénéficient d'un accompagnement personnalisé, de mises en pratique immédiates et de discussions en temps réel, ce qui facilite l'assimilation des compétences. Cette méthode permet également de renforcer les liens professionnels et d'encourager la collaboration entre les participants, tout en garantissant une formation de qualité dans un environnement stimulant.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mt-5 mb-5">
                        <div className="single-intro-inner style-icon-bg text-center">
                            <div className="thumb">
                                <img src={`${publicUrl}assets/img/icon/icon2.png`} alt="img" />
                            </div>
                            <div className="details">
                                <h5 style={{height:'50px'}}>Formation sur mesure</h5>
                                <p>
                                EXIFOD offre une solution personnalisée adaptée aux besoins spécifiques de chaque individu ou organisation. EXIFOD permet de cibler précisément les compétences à développer. Cette approche assurant un apprentissage pertinent et directement applicable dans le contexte professionnel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			</div> 
       
    );
};

export default AboutV2;

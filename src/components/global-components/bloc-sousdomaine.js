import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';



const BlocSousDomaine = () => {
    console.log("ssss", useParams())
    const { idDomaine } = useParams(); // Récupérer l'ID depuis l'URL
    console.log("domaineId", idDomaine)
    const [Sousdomaines, setSousdomaines] = useState([]); // État pour stocker les données
    const [nom, setnom] = useState([]); // État pour stocker les données
    const Url = process.env.REACT_APP_URL_DEV;

    const dataDescription = [
        { id: 1, description: 'Les projets et programmes de développement ont pour but l’amélioration du niveau socio-économique, les conditions et le niveau de vie des populations locales d’un pays. La mise en œuvre des projets et programmes obéit à un processus fait de plusieurs étapes toutes aussi importantes les unes que les autres, étapes au cours desquelles sont réalisées des activités.il s’agit donc de passer en revue ces différentes étapes et de recenser les difficultés qui nuisent à la mise en œuvre efficace et efficiente des projets EXIFOD offre des modules de formation complets pour assurer la bonne gestion des projets et programmes de développement, en respectant leurs objectifs, leurs échéances, leurs coûts et les critères de qualité.' },
        { id: 2, description: 'Le secteur minier, pétrolier et énergétique joue un rôle capital dans l’économie et son développement futur. Ce développement engendre une forte demande en emplois qualifiés. Pour répondre à ces besoins, il est essentiel de mettre en place un programme de formation approprié, comprenant un “Référentiel d’activités” et l’identification des principaux “Profils des métiers” dans ces secteurs. EXIFOD propose diverses formations pour former des cadres de haut niveau (ingénieurs) dans le domaine : minier, pétrolier et énergétique.' },
        { id: 3, description: 'Le développement durable est un concept de plus en plus répandu. Les acteurs associatifs, économiques, sociaux et politiques soutiennent le développement durable malgré des discours parfois contradictoires et des intérêts divergents. Les formations offertes par EXIFOD couvrent le développement durable sous différents angles complémentaires et visent à favoriser un développement équitable en renforçant les compétences.' },
        { id: 4, description: 'Les impacts du réchauffement climatique, tels que la sécheresse, les inondations, les tempêtes, les vagues de chaleur et les feux de forêt, sont déjà observés dans certaines régions. Ces phénomènes ont des conséquences socio-économiques que ces zones doivent gérer. Il est essentiel que les autorités locales, même celles qui pensent être à l’abri de tels événements extrêmes, se préparent à relever ces défis. Pour répondre à cette situation, EXIFOD a choisi d’intégrer le changement climatique dans l’ensemble de ses activités. Cette approche reconnaît l’interdépendance entre le changement climatique et le développement, et souligne la nécessité de prendre des mesures audacieuses pour orienter le monde vers une croissance résiliente.' },
        { id: 5, description: 'Le “processus d’achat public” englobe l’intégralité du cycle d’achat, depuis la définition des besoins jusqu’à la durée totale du contrat, incluant son exécution et son administration. Ces achats prennent la forme de contrats d’investissement conclus par les pouvoirs publics avec des entreprises pour une durée déterminée, dans le but d’acquérir des biens, des services ou des travaux. EXIFOD renforce les compétences pour améliorer et maîtriser tous les aspects liés à la passation des marchés.' },
        { id: 6, description: 'La formation en finance et comptabilité prépare à l’exercice des responsabilités dans les métiers de la finance. Elle aborde à la fois les concepts et les aspects pratiques de cette discipline. Son but est d’enseigner aux professionnels de la finance comment utiliser la théorie financière pour résoudre des problèmes concrets liés au comportement des entreprises et aux marchés financiers. EXIFOD formation a mis en place plusieurs séminaires de formation en finance et comptabilité, Nos formations sont reconnues par la profession et vous permettront d’asseoir vos qualités de rigueur et de sérieux sur des compétences consolidées.' },
        { id: 7, description: 'EXIFOD vous propose une offre variée de formation en management des ressources humaines et des organisations adaptées à vos besoins, afin de vous permettre de mettre en jeux les méthodes de base du management des ressources humaines et des organisations. Suite à cette formation, les participants seront dotés de connaissances théoriques et pratiques en GRH qui leur permettront de développer leurs qualités d’analyse ainsi que leurs habiletés pour la recherche fondamentale et la recherche appliquée.' },
        { id: 8, description: 'La nouvelle gestion publique vise à moderniser l’administration publique pour la rendre plus efficace, efficiente, économique, transparente et axée sur le service au citoyen. EXIFOD offre des nouvelles techniques et outils pour moderniser l’administration publique et développer vos connaissances dans ce domaine.' },
        { id: 9, description: 'La bonne gestion des finances publiques est un concept récent que les acteurs politiques observent à l’échelle nationale et internationale. Il est largement reconnu qu’une gestion efficace des finances publiques facilite la réalisation des objectifs fixés par les politiques publiques. Nos formations en Finance publique permettent aux participants de renforcer leur compréhension des concepts et des principes de bonne gestion des finances publiques, ainsi que de renforcer les systèmes et les structures de contrôle. EXIFOD a planifié plusieurs séminaires de formation visant à développer le secteur des finances publiques et à améliorer la gestion.' },
        { id: 10, description: 'Acquérir des connaissances et des compétences dans divers domaines tels que la planification de la santé, l’évaluation, la communication, la politique de la santé, la promotion de la santé, l’épidémiologie, les sciences sociales, l’économie de la santé, la santé internationale, l’éthique et le droit humain, ainsi que les problèmes prioritaires de la santé publique, mettre en place des projets de santé publique en lien avec son travail, prendre en main sa formation continue grâce à un apprentissage actif. Établir un réseau de collaborations avec des acteurs de la santé publique au niveau national et international. EXIFOD s’est engagé dans la formation des divers acteurs impliqués dans les nouvelles pratiques de santé publique.' },
        { id: 11, description: 'Face à la croissance démographique mondiale, il est impératif d’investir davantage dans l’innovation pour accroître de façon durable la production agricole, améliorer la logistique mondiale, réduire les pertes alimentaires et garantir l’accès à une alimentation saine pour les personnes souffrant de la faim et de la malnutrition. EXIFOD offre dans sa programmation 2024 une variété des thèmes liés au domaine d’agriculture, nutrition et sécurité alimentaire afin de contribuer à l’encadrement de ces projets et d’en assurer une gouvernance optimale.' },
        { id: 12, description: 'L’eau, l’assainissement et l’hygiène sont des éléments essentiels pour la santé publique de chaque communauté. Une amélioration de la situation WASH est un indicateur clé de la pauvreté au sein de toute communauté, et elle revêt une importance capitale dans les actions humanitaires, où le manque d’eau potable et de toilettes peut avoir des répercussions sur la santé publique en favorisant la propagation des maladies.' },
    ];
    useEffect(() => {
        axios
            .get(`${Url}/api/Sousdomaine/iddomaine/${idDomaine}`)
            .then((response) => {
                setSousdomaines(response.data.data);
                console.log('dataDescription.find((data) => data.id === idDomaine)',)
                setnom(dataDescription.find((data) => data.id == idDomaine).description)

                // Stocker les données dans l'état
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des Domaines:', error);
            });
    }, [idDomaine]);
    return (
        <div className="blog-area pd-top-80 pd-bottom-90 go-top" style={{ padding: '50px' }}>

            <div>
                <h3 className='text-center text-yellow'>Introduction</h3>
                <p>{nom}</p>
            </div>
            <div className="row mt-5 ">
                {Sousdomaines.map((Sousdomaine) => (
                    <div className="col-md-6 col-lg-4 col-sm-12 mt-5" key={Sousdomaine.sousDomaineId}>
                        <div className="single-blog-inner     ">
                            <div className="thumb">
                                <img
                                    src={`${Url}/images/${Sousdomaine.sousDomaineImage}`} // Image depuis le backend
                                    alt={Sousdomaine.sousDomaineImage}

                                />
                            </div>
                            <div className="details">
                                <h5 style={{ fontSize: "14px", height: '70px' }}>
                                    {Sousdomaine.sousDomaineNom}
                                </h5>
                                <Link
                                    className="read-more-text"
                                    to={`/course-details/${Sousdomaine.sousDomaineId}`}

                                >
                                    <h6>Fiche Formations</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};


export default BlocSousDomaine;

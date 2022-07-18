import React from "react";
import './Solidaire.css';
import Footer from './footer';

    const Solidaire = () => {
        return (<div className="body_solidaire">
            <h1>Activités Solidaires</h1>
            <h3>Projet solidaire pour le village de Ndigueul</h3>
            <p>Situé au Sénégal dans la zone Sahélienne
            Entre Kébémer et Mbacké/Touba, en plein désert, accès à l’eau et à l’électricité limité, utilisation de générateurs
            Village créé  par Mame Massamba Ndiaye 
            Communauté mouride et baye fall
            Nb d’habitants: entre 500-600 habitants
            1 Ecole franco-arabe: de maternelle jusqu’à CM1 puis les enfants continuent leurs études dans une école dans un autre village.</p>
            <div className="village_grp">
                <div className="village_2"></div>
                <div className="village_1"></div>
            </div>
            <p>
            Le projet est de fournir du matériel scolaire et d’apprentissage pour instruire et former les enfants et adolescents à un métier artisanal qui peut être : métier de couture, agriculture, mécanique-soudure,...
            <br />Besoin : fournitures scolaires, ordinateurs, outils pour cultiver la terre, vêtements, couvertures et draps,…
            </p>
            <h5>Coordinateur du projet avec la Communauté de Ndigueul : 
            <br />Mamadou Bamba Guéye +33769905090  
            <br />africabegue.asso@gmail.com</h5>
            <h3>Projet solidaire pour les Dauphins de Ngor</h3>
            <div className="banniere_dauphins">
                <div className="image1_dauphins"></div>
                <div className="image2_dauphins"></div>
                <div className="image3_dauphins"></div>
            </div>
            <ul>
                <li>Situé au Sénégal dans la presqu'île de Dakar, village de Ngor, un des plus anciens village de pêcheurs du Sénégal, communauté léboue, face à l'ile de Ngor.</li>
                <li>Les Dauphins de Ngor est une école de natation, de plongée, de formation des maîtres-nageurs, d'aquagym créée par Ndiambé Samb, un ancien sapeur-pompier de Paris . L'école des Dauphins est seul habilitée en tant que formation diplômante, certifiée par le gouvernement sénégalais.</li>
                <li>100 à 150pers/jour viennent suivre les cours sur la plage de Ngor chaque matin, souvent envoyés par leurs médecins </li>
                <li>Public des séances d'aquagym : personnes âgées ayant des problèmes de mobilité, AVC, ...</li>
            </ul>
            <div className="besoin_img_txt">
                <div className="besoin_img"></div>
                <p>Besoins : matériel d’apprentissage pour la natation telles que frites, gilets de sauvetage, combinaisons, fauteuils roulants, béquilles pour les personnes en situation de handicap et qui font de l’aquagym et de la rééducation en mer</p>
            </div>
            <div className="secours_img_txt">
                <div className="secours_img"></div>
                <p>Le poste de secours : besoin d’un vrai poste de secours en dur avec le matériel de surveillance et de sauvetage adéquat : chaise haute, jumelles, bouées de sauvetage, gilets de sauvetage, …</p>
            </div>
            <h5>Coordinateur du projet avec la Communauté de Ndigueul : 
            <br />Mamadou Bamba Guéye +33769905090  
            <br />africabegue.asso@gmail.com</h5>
            <Footer />
        </div>
        )
        }

export default Solidaire;
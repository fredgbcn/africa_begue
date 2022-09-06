import React from "react";
import "./About.css";
import Footer from './footer';
import {Link} from "react-router-dom";

    const About = () => {
        return (<div className="body_about">
            <h1>A Propos</h1>
            <p>Nous sommes une association culturelle basée à Schiltigheim dans l’Eurométropole de Strasbourg créé en mai 2018 . Nous promouvons les danses et musiques sénégalaises : sabar et mbalax en donnant des cours et des stages de danses dans l’Eurométropole et Eurodistrict Ortenau. Venez nous rendre visite et partager des moments forts en culture et partage!</p>
            <div className="baniere_about">
                <div className="bamba"></div>
                <div className="parc"></div>
                <div className="interieur"></div>
            </div>
            <p>Africa Bégué signifie «Afrique heureuse» en wolof. Le but de notre association est de partager et diffuser la culture sénégalaise et africaine en Europe, relier les peuples ensemble de façon positive par des actions culturelles et humanitaires. </p>
            <h3>NOS ACTIVITÉS </h3>
            <span>Notre association est active sur plusieurs plans, voici nos activités diverses</span>
            <div className="boxes">
                
                    <Link to="/events" className="box1"><div ><h4>NOS STAGES</h4>
                    <p>Dans cette section vous trouverez tous nos stages, accessibles à toutes et à tous, ils sont souvent accompagnés par des percussionnistes, et de bons repas africains.</p></div></Link>
                
                
                    <Link to="/cours" className="box2"><div ><h4>COURS DE DANSE</h4>
                    <p>Nous porposons des cours de danse réguliers, ouverts à toutes et à tous. </p></div></Link>
                
                
                    <Link to="/solidaire" className="box3"><div ><h4>ACTIVITES SOLIDAIRES</h4>
                    <p>Africa Bégué est aussi active et actrice au niveau local. Vous trouverez dans cette section nos activités solidaires réalisées notamment au Sénégal</p> </div></Link>
               
                
                    <Link to="/partenaires" className="box4"><div ><h4>ACTIVITES ANNEXES</h4>
                    <p>Africa Bégué travaille avec différents collaborateurs, musiciens, traiteurs, stylistes relationnés avec l’Afrique. Vous les trouverez en cliquant ici.</p></div></Link>
                
            </div>
            <Footer />
        </div>
        )
        }

export default About;

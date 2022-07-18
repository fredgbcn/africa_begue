import React from "react";
import './Cours.css';
import Footer from './footer';

    const Cours = () => {
        return (<div className="body_cours">
            <h1>Initiation à la danse et à la musique sénégalaise et d’Afrique de l’Ouest</h1>
            <div className="images_cours">
                <div className="cours1"></div>
                <div className="cours_2images">
                    <div className="cours2"></div>
                    <div className="cours3"></div>
                </div>
            </div>
            <h3>Pour les petits &gt;3 ans/ de 3 à 6 ans :</h3>
            <p>Mini-ateliers de 30 à 45 minutes, accompagné des parents (pour les moins de 3 ans) et avec quelques percussions : tama, bongo, balafon, djembé, les enfants sont invités à s’exprimer sur les instruments et en chantant, et à suivre quelques mouvements de danse traditionnelles simples et ludiques s’ils peuvent marcher et se déplacer. Le cours est chanté et conté.
            <br /> =&gt; coordination, équilibre, rythme, faire ensemble, chanter, danser, s’amuser, s’ouvrir au monde et aux cultures traditionnelles 
            </p>
            <a className="resa" href="https://www.helloasso.com/associations/africa-begue">RESERVER</a>
            <h3>Pour les plus grands :</h3>
            <p>Travailler autour d’un projet éducatif : mettre en scène une chorégraphie de danse avec une scénette (théatre) avec des accessoires et placements sur scène, raconter une histoire.
            <br />=&gt; expression de soi, création artistique, coordination, équilibre, rythme, faire ensemble, chanter, danser, s’amuser, s’ouvrir au monde et aux cultures traditionnelles africaines.</p>
            <a className="resa" href="https://www.helloasso.com/associations/africa-begue">RESERVER</a>
            <Footer />
        </div>
        )
        }

export default Cours;
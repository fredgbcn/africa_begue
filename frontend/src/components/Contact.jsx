import React from "react";
import Logo from './images/logo.jpg';
import './Contact.css';

    const Contact = () => {
        return (<div className="body_contact">
            <h1>Contact</h1>
            <div className="logo_email">
                <img src={Logo} alt="logo"></img>
                <div className="txt_email">
                    <h2>ASSOCIATION AFRICA BÉGUÉ</h2>
                    <p>africabegue.asso@gmail.com</p>
                </div>
            </div>
            <p>LOI ASSOCIATION ALSACE MOSELLE, Volume 48 Folio 31 enregistrée auprès du Tribunal d’instance de Schiltigheim</p>
            <p>Adresse : 87 route de Bischwiller F-67300 Schiltigheim</p>
            <p>IBAN : FR76 1513 5090 1708 0022 8447 557 BIC : CEPA FRPP 513 </p>
            
        </div>
        )
        }

export default Contact;
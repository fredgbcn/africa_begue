import React from "react";
import './Home.css';
import Logo from "./images/logo1.svg";

    const Home = () => {
        return (<div>
            <div className="title_desktop"></div>
            <div class="danse">
                <h3>Entrez dans la Danse !</h3>
                <img src={Logo} alt="logo" class="logo"></img>
            </div>
        </div>
        )
        }

export default Home;
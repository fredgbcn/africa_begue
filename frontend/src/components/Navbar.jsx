import React from "react";
import {Link} from "react-router-dom";
import '../components/Navbar.css';

function Navbar(){
    return (<nav>
        <h4><Link to='/'>Home</Link></h4>
        <h4><Link to='/about'>A propos</Link></h4>
        <h4><Link to='/events'>Stages</Link></h4>
        <h4><Link to='/cours'>Cours de Danse</Link></h4>
        <h4><Link to='/solidaire'>Activités Solidaires</Link></h4>
        <h4><Link to='/contact'>Contact</Link></h4>

    </nav>

    )}

export default Navbar;

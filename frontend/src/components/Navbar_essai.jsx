import React from "react";
import {Link} from "react-router-dom";
import '../components/Navbar.css';

class Navbar extends React.Component {
    state ={
        open: false
    } 

    handelMenu = () =>{
        this.setState(oldState =>{
            let newState= {...oldState.open};
            if(oldState.open === false) newState = true;
            else newState = false;
            return {open:newState};   
        })     
    }


    render() {
    return(<nav>
    <a id="link" href="#" onClick={()=> this.handelMenu()} className={this.state.open ? "a_open" : "a_closed"}><span className={this.state.open ? "burger_open" : "burger_closed"} id="burger"></span></a>
        <ul id="menu_mobile" className={this.state.open ? "ul_open" : "ul_closed"}>
            <li><Link onClick={()=> this.handelMenu()} to='/'>Home</Link></li>
            <li><Link onClick={()=> this.handelMenu()} to='/about'>A propos</Link></li>
            <li><Link onClick={()=> this.handelMenu()} to='/events'>Stages</Link></li>
            <li><Link onClick={()=> this.handelMenu()} to='/cours'>Cours de Danse</Link></li>
            <li><Link onClick={()=> this.handelMenu()} to='/solidaire'>Activités Solidaires</Link></li>
            <li><Link onClick={()=> this.handelMenu()} to='/contact'>Contact</Link></li>
        </ul>
            <h4><Link to='/'>Home</Link></h4>
            <h4><Link to='/about'>A propos</Link></h4>
            <h4><Link to='/events'>Stages</Link></h4>
            <h4><Link to='/cours'>Cours de Danse</Link></h4>
            <h4><Link to='/solidaire'>Activités Solidaires</Link></h4>
            <h4><Link to='/contact'>Contact</Link></h4>
    </nav>

    )}}

export default Navbar;

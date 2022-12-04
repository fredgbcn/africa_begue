import React, {useEffect, useState} from "react";
import "./Events.css";
import Footer from './footer';
    const Events = () => {
        const[events, setNotes] = useState([{  //constante notes, fonstion setNotes
            date:'',
            content:'',
            place: ''
        }]) 

        useEffect(()=>{
            fetch("http://5.196.8.40:3001/events").then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonRes => setNotes(jsonRes));
        },[])
        return <div className="body_events">
            <h1>NOS STAGES</h1>
            <p>Vous trouverez dans cette section tous nos stages à venir </p>
            <div className="banniere_longue"></div>
            {events.map(event =>
            <div className="events_list">
                <p key={"date" + event._id} className="p1">{event.date}</p>
                <div className="content_buttons">
                    <p key={"content" + event._id} className="p2">{event.content}</p>
                    <div className="boutons">
                        <a className="resa" href="https://www.helloasso.com/associations/africa-begue">RESERVER</a>
                        <a className="info" href="https://www.facebook.com/africabegueasso">Plus d'infos</a>
                    </div>
                </div>
                <p key={"place" + event._id} className="p3">{event.place}</p>
            </div>
            )}
            <Footer />
        </div>

        }

export default Events;

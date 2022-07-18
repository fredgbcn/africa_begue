 const express = require("express");
 const router = express.Router();
 const Event = require("../models/eventModel");

 require('dotenv').config();

//ENVOYER NOTE A MONGO
router.route(process.env.REACT_APP_CREATE).post((req, res) =>{
    const date = req.body.date;
    const content = req.body.content;
    const place = req.body.place;
    const newEvent= new Event({
        date,
        content,
        place
    });

    newEvent.save();
})
// ENVOYER CONTENU MONGO VERS LA PAGE NOTE DU SITE
router.route("/events").get((req, res) =>{
   Event.find()
   .then(foundEvents=> res.json(foundEvents)) 
})

 module.exports = router;
const mongoose = require("mongoose");


const eventSchema = {
    date: String,
    content: String,
    place: String
}

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
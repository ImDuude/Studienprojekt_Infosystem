const mongoose = require('mongoose');

const BaugruppeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gewicht: {
        type: Number,
        required: true,
    },
    laenge: {
        type: Number,
        required: true,
    },
    breite: {
        type: Number,
        required: true,
    },
    hoehe: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Baugruppe", BaugruppeSchema)
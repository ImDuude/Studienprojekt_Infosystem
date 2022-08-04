const mongoose = require('mongoose');

const BaugruppeHilfstabelleSchema = new mongoose.Schema({
    baugruppe: {
        type: String,
        required: true,
    },
    unterElement: {
        type: String,
        required: true,
    },
    anzahl: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("BaugruppeHilfstabelle", BaugruppeHilfstabelleSchema)
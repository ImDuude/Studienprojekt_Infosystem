const express = require('express');
const router = express.Router();
const BaugruppeHilfstabelle = require('../models/BaugruppeHilfstabelle');

//Routes
router.get('/', async (req, res) => {
    try {
        const getBaugruppeHilfstabelle = await BaugruppeHilfstabelle.find();
        res.json(getBaugruppeHilfstabelle);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const newBaugruppeHilfstabelle = new BaugruppeHilfstabelle({
        baugruppe: req.body.baugruppe,
        unterElement: req.body.unterElement,
        anzahl: req.body.anzahl,
    });

    try {
    const savedBaugruppeHilfstabelle = await newBaugruppeHilfstabelle.save();
        res.json(savedBaugruppeHilfstabelle);
        } catch(err) {
            res.json({message: err});
        }
});

router.delete('/:id', async (req, res) => {
    try {
        const delBaugruppeHilfstabelle = await BaugruppeHilfstabelle.deleteOne({_id: req.params.id});
        res.json(delBaugruppeHilfstabelle);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;
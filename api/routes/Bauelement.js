const express = require('express');
const router = express.Router();
const Bauelement = require('../models/Bauelement');

//Routes
router.get('/', async (req, res) => {
    try {
        const getBaulement = await Bauelement.find();
        res.json(getBaulement);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const newBauelement = new Bauelement({
        name: req.body.name,
        gewicht: req.body.gewicht,
        laenge: req.body.laenge,
        breite: req.body.breite,
        hoehe: req.body.hoehe,
    });

    try {
    const savedBauelement = await newBauelement.save();
        res.json(savedBauelement);
        } catch(err) {
            res.json({message: err});
        }
});

router.delete('/:id', async (req, res) => {
    try {
        const delBauelement = await Bauelement.deleteOne({_id: req.params.id});
        res.json(delBauelement);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;
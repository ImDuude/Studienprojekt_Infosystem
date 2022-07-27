const express = require('express');
const router = express.Router();
const Baugruppe = require('../models/Baugruppe');

//Routes
router.get('/', async (req, res) => {
    try {
        const getBaulement = await Baugruppe.find();
        res.json(getBaulement);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const newBaugruppe = new Baugruppe({
        name: req.body.name,
        gewicht: req.body.gewicht,
        laenge: req.body.laenge,
        breite: req.body.breite,
        hoehe: req.body.hoehe,
    });

    try {
    const savedBaugruppe = await newBaugruppe.save();
        res.json(savedBaugruppe);
        } catch(err) {
            res.json({message: err});
        }
});

router.delete('/:id', async (req, res) => {
    try {
        const delBaulement = await Baugruppe.deleteOne({_id: req.params.id});
        res.json(delBaulement);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;
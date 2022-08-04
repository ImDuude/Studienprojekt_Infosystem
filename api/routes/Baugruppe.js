const express = require('express');
const router = express.Router();
const Baugruppe = require('../models/Baugruppe');

//Routes
router.get('/', async (req, res) => {
    try {
        const getBaugruppe = await Baugruppe.find();
        res.json(getBaugruppe);
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
        const delBaugruppe = await Baugruppe.deleteOne({_id: req.params.id});
        res.json(delBaugruppe);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;
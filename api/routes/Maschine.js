const express = require('express');
const router = express.Router();
const Maschine = require('../models/Maschine');

//Routes
router.get('/', async (req, res) => {
    try {
        const getMaschine = await Maschine.find();
        res.json(getMaschine);
    } catch (err) {
        res.json({ message: err });
    }
}
    res.send(`Maschine`)
);

router.post('/', async (req, res) => {
    const newMaschine = new Maschine({
        name: req.body.name,
        gewicht: req.body.gewicht,
        laenge: req.body.laenge,
        breite: req.body.breite,
        hoehe: req.body.hoehe,
    });

    try {
        const savedMaschine = await newMaschine.save();
        res.json(savedMaschine);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const delMaschine = await Maschine.deleteOne({ _id: req.params.id });
        res.json(delMaschine);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
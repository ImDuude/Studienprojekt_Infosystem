const express = require('express');

const router = express.Router();

//Routes
router.get('/', (req, res) =>
    res.send(`Baugruppe`)
)

router.get('/test', (req, res) =>
    res.send(`test Baugruppe`)
)

module.exports = router;
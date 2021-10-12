const express = require ('express');
const router = express.Router();
const model = require('../models/Productos')();

router.get('/', (req,res) => {
    res.render('index.ejs', {
    })
});
module.exports = router;
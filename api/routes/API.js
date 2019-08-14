var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');




router.post("/", function (req, res) {

    console.log(req.body)
    let parrafo = req.body.parrafo;
    parrafo = parrafo.toUpperCase()
    res.send(parrafo);

});



module.exports = router;
var express = require('express');
var router = express.Router();
var Pet = require('../models/pet');

router.get('/', function (req, res) {
  Pet.find({}, function (err, pets) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(pets);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Pet = require('../models/pet');


router.get('/', function (req, res) {
  Pet.count({}, function (err, count) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send({numFavorites : count});
  });
});

router.post('/', function (req, res) {
  var pet = new Pet(req.body);
  pet.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.put('/:id', function (req, res) {
  Pet.findByIdAndUpdate(req.params.id, req.body, function (err, pet) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.status(204).send(pet);
  });
});



router.put('/:id/comments', function (req, res) {
  var id = req.params.id;
  var comment = req.body; // {content: <some comment>}

  Pet.findById(id, function (err, pet) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    pet.comments.push(comment);

    pet.save(function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.sendStatus(204);
    });
  });
});

module.exports = router;

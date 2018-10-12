var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('get request from games');
});

router.get('/:id', function(req, res, next) {
  let gameId = req.params.id;
  res.send(`We have got ${gameId}`);
});

module.exports = router;

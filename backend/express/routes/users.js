var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* sample api */
router.get('/:id', function(req, res, next) {
  let returnParam = {"uid": req.params.id, "name": "test_user"}
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(returnParam)
});
module.exports = router;

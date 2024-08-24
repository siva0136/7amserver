var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:2020/users/get-payers
router.get('/get-payers', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get-payers-query', function(req, res, next) {
  const {name,loc}=req.query
  res.send(`my name is ${name} from ${loc}`);
});

router.get('/get-payers-pathparam/:name/:loc', function(req, res, next) {
  const {name,loc}=req.params
  res.send(`my name is ${name} from ${loc}`);
});

router.put('/get-payers-header', function(req, res, next) {
  const {name,loc}=req.headers
  res.send(`my name is ${name} from ${loc}`);
});


// http://localhost:2020/users/get-payers-body
router.post('/get-payers-body', function(req, res, next) {
  const {name,loc}=req.body
  res.send(`my name is ${name} from ${loc}`);
});

module.exports = router;

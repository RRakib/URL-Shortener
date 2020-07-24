let express = require('express');
let router = express.Router();

let urlHolder = [];
let aliasHolder = [];

router.get('/:id', function(req, res, next) {
  let ind = aliasHolder.indexOf(req.params.id);
  res.redirect(urlHolder[ind]);
});

router.post('/url', function(req, res, next) {
  const {url, alias} = req.body;
  urlHolder.push(url);
  aliasHolder.push(alias);
});

module.exports = router;

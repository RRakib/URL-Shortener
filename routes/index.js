let { nanoid } = require('nanoid');
let express = require('express');
let router = express.Router();

let urlHolder = [];
let aliasHolder = [];

router.get('/:id', function(req, res, next) {
  let ind = aliasHolder.indexOf(req.params.id);
  res.redirect(urlHolder[ind]);
});

router.post('/url', function(req, res, next) {
  const {url} = req.body;
  let alias = nanoid(5);
  urlHolder.push(url);
  aliasHolder.push(alias);
  res.json({
    url: "http://localhost:5000/" + alias
  })
});

module.exports = router;

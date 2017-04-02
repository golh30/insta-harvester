 var express = require('express');
 var router = express.Router();
 var insta = require('../utility/insta');
 /* GET users listing. */
 router.get('/:name', function(req, res, next) {
   var name = req.params.name;
   insta.getInstaPPLink(name, (link) => {
     var linkObj = {};
     linkObj.link = link;
     res.send(linkObj);
   });
 });

 module.exports = router;

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
 
 /* for api-ai*/
 router.get('/apiaiFullfillment', function(req, res, next) {
   console.log(">>>apiaiFullfillment");
    let action = request.body.result.action;
    const parameters = request.body.result.parameters;
    var name = parameters.name;
    
    insta.getInstaPPLink(name, (link) => {
    let responseJson = {};
    if(link){
    responseJson.speech = 'This message is from API.AI\'s Cloud Functions for Firebase editor!' + link + " &  " + name;
    responseJson.displayText = 'This is from API.AI\'s Cloud Functions for Firebase editor!'+ link + " &  " + name;;
    } else{
      responseJson.speech = 'This message is from API.AI\'s Cloud Functions for Firebase editor! Not able to find on username ' + name;
      responseJson.displayText = 'This is from API.AI\'s Cloud Functions for Firebase editor! Not able to find on username ' + name;
    }
    response.json(responseJson);  });
});

 module.exports = router;

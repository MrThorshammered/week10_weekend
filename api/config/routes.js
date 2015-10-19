var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var complaintsController = require('../controllers/complaints');


router.route('/complaints')

  
  .get(complaintsController.getAll)


  .post(complaintsController.createComplaint);


router.route('/complaints/:id')

  
  .get(complaintsController.getComplaint)

  
  .put(complaintsController.updateComplaint)

  
  .delete(complaintsController.removeComplaint);


module.exports = router
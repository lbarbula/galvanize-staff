var express = require('express');
var router = express.Router();
var query = require('../db/queries')



/* GET users listing. */
router.get('/', function(req, res, next) {
  query.listStaff()
    .then(function(staff) {
      console.log(staff)
      res.render('staff', {staff: staff});
    })
});

module.exports = router;

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

router.get('/new', function(req, res, next){
  res.render('addStaff')
})

router.post('/',  function(req, res, next){
  var staff = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  query.addStaff(staff)
    .then(function(){
      res.redirect('/staff')
    })
})

module.exports = router;

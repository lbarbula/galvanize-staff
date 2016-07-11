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

router.get('/delete/:id', function(req, res, next){
  queries.getStaff(req.params.id)
  .then(function(staff) {
    res.render('delete-staff', {staff:staff})
  })
})
router.delete('/:id', function(req,res,next){
  queries.removeStaff(req.params.id)
  .then(function(){
    res.redirect('/staff')
  })
})
router.post('/',  function(req, res, next){
  //make factory
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

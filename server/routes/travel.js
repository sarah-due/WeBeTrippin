/// GET json from db
var express = require ('express')
var router = express.Router()
var db = require ('../db')

router.get('/', function(req, res){
  res.status(200).json(db.getCountries())
})





module.exports = router

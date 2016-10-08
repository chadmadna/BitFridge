var express = require('express')
var router = express.Router()
var apicalls = require('../modules/apicalls')
var secret = require('../app').secret
var tokens = require('../app').tokens

var searchIngredients = apicalls.searchIngredients

router.get('/ingredients/autocomplete', function(req, res, next) {
  var path = req.path
  var params = req.query
  var token = req.headers['X-CSRF-Token']
  if (tokens.verify(secret, token)){
    searchIngredients(path, params, function (err, response, body) {
      if (!err && response.statusCode === 200)
        res.json(body)
      else
        res.status(500).json(err)
  })
  } else {
    var error = new Error('CSRF Token not found')
    res.status(500).json(error)
  }
})

module.exports = router

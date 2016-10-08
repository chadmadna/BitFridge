var request = require('request')
var append = require('append-query')
var secret = require('../app').secret
var tokens = require('../app').tokens

// DEVELOPMENT ONLY
const baseUrl = 'http://localhost:3000/api/'

function searchIngredients (string, cb) {
  var url = baseUrl + 'ingredients/autocomplete'
  var params = {
    metaInformation: true,
    number: 6,
    query: string
  }
  get(url, params, cb)
}

function get (url, params, cb) {
  var token = tokens.create(secret)
  var options = {
    url: append(url, params),
    headers: { 'X-CSRF-Token': token }
  }
  request.get(options, function (err, res, body) {
    if (!err && res.statusCode == 200)
      cb(null, res, JSON.parse(body))
  }).on('error', function (err) {
    cb(err)
  })
}

module.exports = {
  searchIngredients: searchIngredients
}

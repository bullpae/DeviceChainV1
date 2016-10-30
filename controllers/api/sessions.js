var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt-simple')
var config = require('../../config')
var User   = require('../../models/user_info')

// Note that the book had this as router.post('/' but had this router mounted at '/api/sessions'.
// In this code it's mounted at '/api' and is router.post('/sessions'
// Either way will be fine, but the full URL should be '/api/sessions'
router.post('/sessions', function (req, res, next) {
   console.log("session post 1 %s %s", req.body.userid, req.body.password)

  var userid = req.body.userid
  User.findOne({userid: userid})
  .select('password')
  .exec(function (err, user) {
    console.log(err)
    console.log(user)
    if (err) { return next(err) }
    if (!user) { return res.sendStatus(401) }
    bcrypt.compare(req.body.password, user.password, function (bcrypt_err, valid) {
      if (bcrypt_err) { return next(err) }
      if (!valid) { return res.sendStatus(401) }
      var token = jwt.encode({userid: userid}, config.secret)
      res.send(token)
    })
  })
})

module.exports = router

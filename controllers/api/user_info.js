var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt    = require('jwt-simple')
var User   = require('../../models/user_info')
var config = require('../../config')

router.get('/user_info/:userid', function (req, res, next) {
  var cond = req.params.userid
  
  console.log("user_info condition: %s", cond)
 
  if (cond == "") {
    User.find({})
    .sort('-date')
    .exec(function (err, user) {
      if (err) { return next(err) }
      console.log(user)
      res.json(user)
      console.log("get all user info %s", user.userid)
    })
  } else {
    User.findOne({userid:cond})
    .sort('-date')
    .exec(function (err, user) {
      if (err) { return next(err) }
      console.log(user)
      res.json(user)
      console.log("get user info %s", user.userid)
    })
  }
})

router.get('/user_info', function (req, res, next) {
  User.find({})
  .sort('-date')
  .exec(function (err, user) {
    if (err) { return next(err) }
    console.log("get all user info")
    console.log(user)
    res.json(user)
  })
})

// router.get('/user_info', function (req, res, next) {
//   if (!req.headers['x-auth']) {
//     return res.sendStatus(401)
//   }
//   var auth = jwt.decode(req.headers['x-auth'], config.secret)
//   User.findOne({userid: auth.userid}, function (err, user) {
//     if (err) { return next(err) }
//     res.json(user)
//   })
// })

router.post('/user_info', function (req, res, next) {
  console.log(req.body)
  
  var user = new User({username: req.body.username, userid: req.body.userid, usertype: req.body.usertype})
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) { return next(err) }
    user.password = hash
    user.save(function (err) {
      if (err) { return next(err) }
      res.sendStatus(201)
    })
  })
})

router.delete('/user_info/:userid', function (req, res, next) {
  console.log("user_info delete 1 %s", req.params.userid)
  console.log(req.params)

  User.remove ({userid: req.params.userid}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
}) 

module.exports = router

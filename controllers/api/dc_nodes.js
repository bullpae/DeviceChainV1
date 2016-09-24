var router = require('express').Router()
var websockets = require('../../websockets')
var pubsub = require('../../pubsub')
var Dc_node = require('../../models/dc_node')

router.get('/dc_nodes', function (req, res, next) {
  Dc_node.find()
  .exec(function (err, dc_nodes) {
    if (err) { return next(err) }
    res.json(dc_nodes)
  })
})

// router.post('/dc_nodes', function (req, res, next) {
//   var node = new Node({body: req.body.body})
  
//   post.username = req.auth.username
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     pubsub.publish('new_post', post)
//     res.status(201).json(post)
//   })
// })

// pubsub.subscribe('new_post', function (post) {
//   websockets.broadcast('new_post', post)
// })

module.exports = router

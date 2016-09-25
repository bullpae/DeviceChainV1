var router = require('express').Router()
var websockets = require('../../websockets')
var pubsub = require('../../pubsub')
var Dc_node = require('../../models/dc_node')
var node = require('../../javascript/dc_node_ex')

router.get('/dc_nodes', function (req, res, next) {
  console.log("sss module test")
  return node.list();
})

node.list('/dc_nodes', function (req, res, next) {
  console.log("aaa module test")
  return res
})

router.getNode('/dc_nodes', function (req, res, next) {
  console.log("module test")
  return node.list();
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

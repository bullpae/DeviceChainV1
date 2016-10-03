var router = require('express').Router()

// router.get('/dcnodes', function (req, res, next) {
//   console.log("sss module test")
//   return node.list();
// })

// node.list('/dcnodes', function (req, res, next) {
//   console.log("aaa module test")
//   return res
// })

// router.getNode('/dcnodes', function (req, res, next) {
//   console.log("module test")
//   return node.list();
// })
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

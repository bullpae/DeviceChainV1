var bodyParser = require('body-parser')
var router = require('express').Router()

router.use(require('../auth'))
router.use(bodyParser.json())

router.use('/api', require('./api'))
router.use('/api/server', require('./api/server'))
router.use('/api/device', require('./api/device'))
router.use('/', require('./static'))

module.exports = router

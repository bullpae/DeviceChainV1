var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./sessions'))
router.use(require('./users'))
router.use(require('./apitest'))
router.use(require('./dcauth'))

module.exports = router

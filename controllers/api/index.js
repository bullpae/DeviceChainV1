var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./sessions'))
router.use(require('./users'))
router.use(require('./apitest'))
router.use(require('./dcauth'))
router.use(require('./dcnode'))

module.exports = router

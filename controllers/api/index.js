var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./sessions'))
router.use(require('./users'))
router.use(require('./dc_nodes'))

module.exports = router

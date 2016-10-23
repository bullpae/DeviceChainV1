var router = require('express').Router()

router.use(require('./account'))
router.use(require('./block'))
router.use(require('./address'))
router.use(require('./transaction'))

// api 추가 후 npm 재시작 필요!
module.exports = router

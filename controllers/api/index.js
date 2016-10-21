var router = require('express').Router()

router.use(require('./sessions'))
router.use(require('./user_info'))
router.use(require('./dcauth'))
router.use(require('./dcaccount'))
router.use(require('./dcnode'))
router.use(require('./dcserver'))
router.use(require('./dcaddress'))

// api 추가 후 npm 재시작 필요!
module.exports = router

var router = require('express').Router()

// router.use(require('./posts'))
router.use(require('./sessions'))
router.use(require('./user_info'))
// router.use(require('./apitest'))
router.use(require('./dcauth'))
router.use(require('./dcnode'))
router.use(require('./dcserver'))
router.use(require('./dcaddress'))
//router.use('/api/server', require('./api/server'))

// api 추가 후 npm 재시작 필요!
module.exports = router

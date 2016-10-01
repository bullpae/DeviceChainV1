var router = require('express').Router()

router.use(require('./server_info'))
router.use(require('./delete'))

// api 추가 후 npm 재시작 필요!
module.exports = router

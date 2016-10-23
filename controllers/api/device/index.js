var router = require('express').Router()

router.use(require('./device_info'))
router.use(require('./mydevice_info'))

// api 추가 후 npm 재시작 필요!
module.exports = router

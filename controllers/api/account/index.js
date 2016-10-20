var router = require("express").Router()

router.use(require("./account_info"))
router.use(require("./address_info"))

// api 추가 후 npm 재시작 필요!
module.exports = router

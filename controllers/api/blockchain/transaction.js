var router = require('express').Router()
var DeviceInfo = require('../../../models/device_info')

router.get('/transaction/:deviceid', function (req, res, next) {

})

router.get('/transaction', function (req, res, next) {
})

router.post('/transaction/:deviceid', function (req, res, next) {
  // 정보 비교하여 정상이면 코인 이동
  // 트랜잭션 헥사 값을 트랙잭션 서명
  // 서명한 트랙잭선 블록체인에 전송
  
})

router.put('/transaction/:deviceid', function (req, res, next) {

})

router.delete('/transaction/:deviceid', function (req, res, next) {

})

module.exports = router
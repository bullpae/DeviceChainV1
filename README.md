windows dev setup
-----------------

* Install VSBuild.exe
execute admin account
npm install --global --production windows-build-tools
https://github.com/nodejs/node-gyp/issues/307
 

* Install Mongodb
https://www.mongodb.com/download-center?jmp=nav#community
No wiredTiger Engine -> mongod --dbpath "data" --storageEngine "mmapv1"


* Install Redis
https://github.com/MSOpenTech/redis/releases
https://github.com/dmajkic/redis/downloads
http://lovedb.tistory.com/150
redis-server



* Server
기기 등록 단계
인증 요청 받은 기기 인증 처리 단계 
인증 정보 확인 단계
통신 테스트
 인증 된 기기 일 경우 인증 화면 출력
 미 인증 된 기기 일 경우 오류 화면 출력

* Client
키 쌍 생성 단계
기기 정보와 공개키를 이용한 기기 인증 단계
통신 테스트 
 인증 된 기기 일 경우 정상 접속 화면 출력
 미 인증 된 기기 일 경우 미 인증 화면 출력


 
Sample project for [Write Modern Web Apps with the MEAN Stack](http://www.amazon.com/Write-Modern-Apps-MEAN-Stack/dp/0133930157) by [Jeff Dickey](https://dickey.xxx)

[![Write Modern Web Apps with the MEAN Stack](book.jpg)](http://www.amazon.com/Write-Modern-Apps-MEAN-Stack/dp/0133930157)

Chapters
--------

* Chapter 1: How Modern Web Architecture Is Changing
* Chapter 2: Why JavaScript Is a Good Choice for Modern Apps
* Chapter 3: Introducing the Social Networking Project [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch3) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch3.zip)
* Chapter 4: Building a Node.js API [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch4) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch4.zip)
* Chapter 5: Integrating Node with Angular [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch5) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch5.zip)
* Chapter 6: Automating Your Build with Gulp [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch6) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch6.zip)
* Chapter 7: Building Authentication in Node.js [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch7) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch7.zip)
* Chapter 8: Adding Routing and Client Authentication [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch8) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch8.zip)
* Chapter 9: Pushing Notifications with WebSockets [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch9) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch9.zip)
* Chapter 10: Performing End-to-End Testing [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch10) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch10.zip)
* Chapter 11: Testing the Node Server [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch11) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch11.zip)
* Chapter 12: Testing Angular.js [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch12) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch12.zip)
* Chapter 13: Deploying to Heroku [GitHub](https://github.com/dickeyxxx/mean-sample/tree/ch13) [.zip](https://github.com/dickeyxxx/mean-sample/archive/ch13.zip)
* Chapter 14: Deploying to Digital Ocean

**If you see anything that is confusing, seems like a step is skipped, or that is different from the book than here, please [submit an issue](https://github.com/dickeyxxx/mean-sample/issues). I want to make sure this code is as helpful as possible and should get back to you quickly.**

Changes
-------

Express res.send -> res.sendStatus
----------------------------------

Express deprecated the syntax for simple HTTP responses. You used to be able to say `res.send(401)` and it would reply 'Unauthorized' along with the HTTP code, this is deprecated in favor of `res.sendStatus(401)` which does the same thing.

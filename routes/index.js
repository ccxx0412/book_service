// express实例
var express = require('express')
// 路由引入
var router = express.Router()
// 数据库引入
var mongoose = require('mongoose')
// 定义路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/mongooseTest', function(req, res, next) {
  mongoose.connect(
    'mongodb://localhost/pets'
    // { useMongoClient: true }
  )
  mongoose.Promise = global.Promise
  var Cat = mongoose.model('Cat', { name: String, age: String,count:Number })

  var tom = new Cat({ name: 'Tom', age: 20,count:300 })
  tom.save(function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('success insert')
    }
  })
  res.send('数据库连接测试')
})
module.exports = router

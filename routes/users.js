var express = require('express')
var router = express.Router()

var user = require('../models/user')
var crypto = require('crypto')
var movie = require('../models/movie')
var mial = require('../models/mail')
var comment = require('../models/comment')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

const init_token = 'TKL02o'
/**
 * @api {post} /user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "status" : 0,
 *      "data" : {
 *          "token" : "4c0b86400714b6e308cb3dc8b6936f71"
 *      },
 *      "message":"用户登录成功"
 *  }
 * @apiSampleRequest http://localhost:3000/users/login
 * @apiVersion 1.0.0
 */
router.post('/login', function(req, res, next) {
  if (!req.body.username) {
    res.json({ status: 1, message: '用户名为空' })
    // return false
  }
  if (!req.body.password) {
    res.json({ status: 1, message: '密码为空' })
    // return false
  }
  user.findUserLogin(req.body.username, req.body.password, function(err,userSave) {
    console.log(userSave)
    if (userSave.length != 0) {
      // 通过MD5查看密码
      console.log(userSave[0])
      var token_after = getMD5Password(userSave[0]._id)
      res.json({ status: 0, data: { token: token_after },message:'用户登录成功' })
    }else{
      res.json({status:1,message:'用户名或者密码错误'})
    }
  })
})
/**
 * @api {post} /user/register 用户注册
 * @apiDescription 用户注册
 * @apiName register
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} userMail 邮箱
 * @apiParam {string} userPhone 手机号
 * @apiSuccess {json} data 返回值
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      status: 0, 
 *      data:{
 *        username:username
 *      }
 *      message: '注册成功'
 *  }
 * @apiSampleRequest http://localhost:3000/users/register
 * @apiVersion 1.0.0
 */
router.post('/register', function(req, res, next) {
  if (!req.body.username) {
    res.json({ status: 1, message: '用户名为空' })
    return false
  }
  if (!req.body.password) {
    res.json({ status: 1, message: '密码为空' })
    return false
  }
  if (!req.body.userMail) {
    res.json({ status: 1, message: '用户邮箱为空' })
    return false
  }
  if (!req.body.userPhone) {
    res.json({ status: 1, message: '用户手机为空' })
    return false
  }
  user.findByUsername(req.body.username, function(err, userSave) {
    console.log(userSave)
    if (userSave.length != 0) {
      // 返回错误信息
      res.json({ status: 1, message: '用户已注册' })
      return false
    } else {
      var registerUser = new user({
        username: req.body.username,
        password: req.body.password,
        userMail: req.body.userMail,
        userPhone: req.body.userPhone,
        userAdmin: false,
        userPower: 0,
        userStop: false
      })
      console.log(registerUser)
      registerUser.save(function() {
        res.json({ status: 0, message: '注册成功' })
        return false
      })
    }
  })
})
// 用户提交评论
router.post('/postComment', function(req, res, next) {})
// 用户点赞
router.post('/support', function(req, res, next) {})
// 用户找回密码
router.post('/findPassword', function(req, res, next) {})
// 用户发送站内信
router.post('/sendEmail', function(req, res, next) {
  // 用户显示站内信时，其中的receive参数值为1时是发送的内容，值为2时是收到的内容
})
// 获取MD5值
function getMD5Password(id) {
  var md5 = crypto.createHash('md5')
  var token_before = id + init_token
  return md5.update(token_before).digest('hex')
}
module.exports = router

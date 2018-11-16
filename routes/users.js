var express = require('express')
var router = express.Router()

var user = require('../models/user')
var crypto = require('crypto')
var movie = require('../models/movie')
var mail = require('../models/mail')
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
/**
 * @api {post} /user/postComment 用户评论
 * @apiDescription 用户评论
 * @apiName postComment
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} movie_id 电影id
 * @apiParam {string} context 评论内容
 * @apiSuccess {json} data 返回值
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      status: 0, 
 *      message: '评论成功'
 *  }
 * @apiSampleRequest http://localhost:3000/users/postComment
 * @apiVersion 1.0.0
 */
router.post('/postComment', function(req, res, next) {
  if(!req.body.username){
    var username='匿名用户'
  }
  if(!req.body.movie_id){
    res.json({status:1,message:'电影id为空'})
  }
  if(!req.body.context){
    res.json({ status: 1, message: '评论内容为空' })    
  }
  // 根据数据集建立一个新的数据内容
  var saveComment=new comment({
    movie_id:req.body.movie_id,
    username:req.body.username?req.body.username:username,
    context:req.body.context,
    check:false
  })
  // 保存合适的数据集
  saveComment.save(function(err){
    if(err){
      res.json({status:1,message:err})
    }else{
      res.json({status:0,message:'评论成功'})
    }
  })

})
/**
 * @api {post} /user/support 用户点赞
 * @apiDescription 用户点赞
 * @apiName support
 * @apiGroup User
 * @apiParam {string} movie_id 电影id
 * @apiSuccess {json} data 返回值
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      status: 0, 
 *      message: '点赞成功'
 *  }
 * @apiSampleRequest http://localhost:3000/users/support
 * @apiVersion 1.0.0
 */
router.post('/support', function(req, res, next) {
  if (!req.body.movie_id) {
    res.json({ status: 1, message: '电影id传输失败' })
  }
  movie.findById(req.body.movie_id,function(err,supportMovie){
    // 更新操作
    movie.update({movie_id:req.body.movie_id},{movieNumSuppose:supportMovie.movieNumSuppose+1},function(err){
      if(err){
        res.json({status:1,message:'点赞失败',data:err})
      }else{
        res.json({status:0,message:'点赞成功'})
      }
    })
  })

})
// 用户找回密码
router.post('/findPassword', function(req, res, next) {
  // 需要输入用户的邮箱信息和手机信息,同时可以更新密码
  // 这里需要两个返回情况,一个req.body.repassword存在时,另一个是repassword不存在时
  // 这个接口同时用于密码的重置,需要用户登陆
  if(req.body.repassword){
    // 当存在时,需要验证其登录情况或者验证其code
    if(req.body.token){
      // 当存在code登录状态时,验证其状态
      if(!erq.body.user_id){
        res.json({status:1,message:'用户登录错误'})
      }
      if (!erq.body.password) {
        res.json({ status: 1, message: '用户老密码错误' })
      }
    }
  }
})
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

var express = require('express')
var router = express.Router()

var user = require('../models/user')
var crypto = require('crypto')
var movie = require('../models/movie')
var mail = require('../models/mail')
var comment = require('../models/comment')

router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.post('/addMovie', function(req, res, next) {
  //   if (!req.body.username) {
  //     res.json({ status: 1, message: '用户名为空' })
  //   }
  if (!req.body.movieName) {
    res.json({ status: 1, message: '电影名称为空' })
  }
  if (!req.body.movieImg) {
    res.json({ status: 1, message: '电影图片为空' })
  }
  if (!req.body.movieDownload) {
    res.json({ status: 1, message: '电影下载地址为空' })
  }
  if (!req.body.movieMainPage) {
    var movieMainPage = false
  }
  var saveMoive = new movie({
    movieName: req.body.movieName,
    movieImg: req.body.movieImg,
    movieVideo: req.body.movieVideo,
    movieDownload: req.body.movieDownload,
    movieTime: Date.now(),
    movieNumSuppose: 0,
    movieNumDownload: 0,
    movieMainPage: movieMainPage
  })
  saveMoive.save(function(err) {
      if(err){
          res.json({status:1,message:'添加失败'})
      }else{
          res.json({status:0,message:'添加成功'})
      }
  })
})
module.exports = router
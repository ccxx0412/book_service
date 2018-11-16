/*
 Navicat MongoDB Data Transfer

 Source Server         : Mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40003
 Source Host           : localhost:27017
 Source Schema         : movieServer

 Target Server Type    : MongoDB
 Target Server Version : 40003
 File Encoding         : 65001

 Date: 15/11/2018 15:33:47
*/


// ----------------------------
// Collection structure for articles
// ----------------------------
db.getCollection("articles").drop();
db.createCollection("articles");

// ----------------------------
// Documents of articles
// ----------------------------
db.getCollection("articles").insert([ {
    _id: ObjectId("5bea57e1a394f61498a17337"),
    articleTitle: "三大",
    articleContext: "撒的撒打算的撒打算",
    articleTime: "1542084577386"
} ]);

// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51b02d23b0310345fc1a3"),
    "movie_id": "5be52a8842466415245fa719",
    username: "匿名用户",
    context: "sadddd",
    check: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51b13d23b0310345fc1a4"),
    "movie_id": "5be52a8842466415245fa719",
    username: "匿名用户",
    context: "we ",
    check: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51b165405120a5c4da129"),
    "movie_id": "5be52a8842466415245fa719",
    username: "匿名用户",
    context: "ewqwqwqwq",
    check: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51b185405120a5c4da12a"),
    "movie_id": "5be52a8842466415245fa719",
    username: "sadd",
    context: "ewqwqwqwq",
    check: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51b1a5405120a5c4da12b"),
    "movie_id": "5be52a8842466415245fa719",
    username: "sadd",
    context: "ewqwqwqwq",
    check: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5be51c66f0339b203ce77d52"),
    "movie_id": "5be52a8842466415245fa719",
    username: "111",
    context: "111",
    check: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5bebaef566c4c9161c94da50"),
    "movie_id": "5be52a7b42466415245fa718",
    username: "shenhao",
    context: "111",
    check: false
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5bebaf1466c4c9161c94da51"),
    "movie_id": "5be52a7b42466415245fa718",
    username: "shenhao",
    context: "哇你试着你的哦i啊啊啊 ",
    check: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5bebaf2a66c4c9161c94da52"),
    "movie_id": "5be52a7b42466415245fa718",
    username: "shenhao",
    context: "撒旦撒大声地",
    check: true
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5bebc6b01f4e531b04097d48"),
    "movie_id": "5be52a7b42466415245fa718",
    username: "shenhao",
    context: "那不是很难受的啊",
    check: true
} ]);

// ----------------------------
// Collection structure for movies
// ----------------------------
db.getCollection("movies").drop();
db.createCollection("movies");

// ----------------------------
// Documents of movies
// ----------------------------
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52a7b42466415245fa718"),
    movieName: "反弹风暴3",
    movieImg: "http://wx1.sinaimg.cn/mw690/006HBWQXly1fva333288cj305006kq38.jpg",
    movieVideo: "http://aaxxy.com/vod-play-id-15065-src-1-num-2.html",
    movieDownload: "http://aaxxy.com/vod-play-id-15065-src-1-num-2.html",
    movieTime: "1541745275380",
    movieNumSuppose: NumberInt("28"),
    movieNumDownload: NumberInt("4"),
    movieMainPage: true
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52a8842466415245fa719"),
    movieName: "破梦游戏",
    movieImg: "http://wx4.sinaimg.cn/mw690/80df6fe6ly1fx4pgsusr5j20jn0rs77z.jpg",
    movieVideo: "http://www.94aw.com/play/47357.html",
    movieDownload: "http://www.94aw.com/play/47357.html",
    movieTime: "1541745288444",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("1"),
    movieMainPage: true,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52db1049886265cb3c78c"),
    movieName: "热恋女校",
    movieImg: "http://wx4.sinaimg.cn/mw690/80df6fe6ly1fx4pf4yrnnj205006kjrx.jpg",
    movieVideo: "http://www.94aw.com/play/47356.html",
    movieDownload: "http://www.94aw.com/play/47356.html",
    movieTime: "1541746097026",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("0"),
    movieMainPage: true,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52db87f8cfb25f484bb72"),
    movieName: "sad",
    movieImg: "ccxx",
    movieVideo: "",
    movieDownload: "ccxx",
    movieTime: "1541746104325",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("0"),
    movieMainPage: false,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52dbd7f8cfb25f484bb73"),
    movieName: "文档",
    movieImg: " ",
    movieVideo: "",
    movieDownload: "ccxx",
    movieTime: "1541746109995",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("1"),
    movieMainPage: false,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52dc07f8cfb25f484bb74"),
    movieName: "sad",
    movieImg: " sa ",
    movieVideo: "",
    movieDownload: "ccxx",
    movieTime: "1541746112858",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("0"),
    movieMainPage: false,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5be52dca7f8cfb25f484bb75"),
    movieName: "sad",
    movieImg: "fe",
    movieVideo: "",
    movieDownload: "",
    movieTime: "1541746122875",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("5"),
    movieMainPage: false,
    __v: null
} ]);
db.getCollection("movies").insert([ {
    _id: ObjectId("5bea52eccde00b1edcf2c7f1"),
    movieName: "毒液：致命守护者 Venom ",
    movieImg: "http://wx4.sinaimg.cn/mw690/80df6fe6gy1fw1qpdnrs2j20u018g7c2.jpg",
    movieDownload: "http://www.94aw.com/play/46694.html",
    movieTime: "1542083308103",
    movieNumSuppose: NumberInt("0"),
    movieNumDownload: NumberInt("0"),
    movieMainPage: false,
    __v: null,
    movieVideo: ""
} ]);

// ----------------------------
// Collection structure for recommends
// ----------------------------
db.getCollection("recommends").drop();
db.createCollection("recommends");

// ----------------------------
// Documents of recommends
// ----------------------------
db.getCollection("recommends").insert([ {
    _id: ObjectId("5bea599263dc271c3cf2166d"),
    recommendImg: "https://pic1.iqiyipic.com/common/lego/20181111/2f5683173ac94548b2af43fb11a8bf9d.jpg",
    recommendSrc: "https://www.iqiyi.com/v_19rr2kbzd8.html",
    recommendTitle: "追捕者：陈龙于和伟热血追捕"
} ]);
db.getCollection("recommends").insert([ {
    _id: ObjectId("5bea621c2818401c38007bf2"),
    recommendImg: "https://pic3.iqiyipic.com/common/lego/20181112/0b29390c59b04ab4ac79d55f6621f7f2.webp",
    recommendSrc: "https://www.iqiyi.com/v_19rr3yebes.html",
    recommendTitle: "你和我的倾城时光：赵丽颖遇险"
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5be126c7d3e12e1f78fefe71"),
    username: "水电费",
    password: "saasdasd",
    userMail: "sadkasdj@fdsajsl",
    userPhone: "s2382349",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be126cad3e12e1f78fefe72"),
    username: "撒度",
    password: "saasdasdwqewq",
    userMail: "sadkasdj@fdsajslwqe",
    userPhone: "s2382349wqe",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be126d0d3e12e1f78fefe73"),
    username: "萨达",
    password: "qwe",
    userMail: "wqe",
    userPhone: "wqe",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be12a6f49d7eb0d20ed4d65"),
    username: "shenhao",
    password: "123456",
    userMail: "775308609@qq.com",
    userPhone: "150",
    userAdmin: true,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be12bc60952ca1ea0e8d882"),
    username: "ccxx",
    password: "ccxx",
    userMail: "775308609@qq.com",
    userPhone: "150",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be24d2f4379c519b05d62b6"),
    username: "三等奖",
    password: "sad",
    userMail: "asd",
    userPhone: "asd",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be24d384379c519b05d62b7"),
    username: "曦曦",
    password: "ccxx2113191210",
    userMail: "23311628227@qq.com",
    userPhone: "17857095312",
    userAdmin: true,
    userPower: NumberInt("0"),
    userStop: false
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5be27d8861714926648f70ce"),
    username: "tom",
    password: "123",
    userMail: "1",
    userPhone: "1",
    userAdmin: false,
    userPower: NumberInt("0"),
    userStop: false
} ]);

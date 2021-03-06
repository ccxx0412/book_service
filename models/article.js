var mongoose = require('../common/db');
// 文章数据集
var article = new mongoose.Schema({
    articleTitle: String,
    articleContext: String,
    articleTime: String
}, {versionKey: false} //去除mongoose的__v字段
)
//通过id查找
article.statics.findByArticleId = function (id, callBack) {
    this.findOne({ _id: id }, callBack);
};
article.statics.findAll = function (callBack) {
    this.find({}, callBack);
};

var articleModel = mongoose.model('article', article);
module.exports = articleModel;
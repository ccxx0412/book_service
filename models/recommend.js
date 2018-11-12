var mongoose = require('../common/db');
// 主页推荐数据集
var recommend = new mongoose.Schema({
    recommendImg: String,
    recommendSrc: String,
    recommendTitle: String
}, {versionKey: false} //去除mongoose的__v字段
)
// 通过ID获得主页推荐
recommend.statics.findByIndexId = function (m_id, callBack) {
    this.find({ findByIndexId: m_id }, callBack);
};
// 找到所有的推荐 
recommend.statics.findAll = function (callBack) {
    this.find({}, callBack);
};
var recommendModel = mongoose.model('recommend', recommend);

module.exports = recommendModel
var mongoose=require('../common/db')
// 评论数据集
var comment=new mongoose.Schema({
    movie_id:String,
    username:String,
    context:String,
    check:Boolean
},{versionKey:false} //去除mongoose的__v字段
)
// 数据操作的常用方法
comment.statics.findByMoiveId=function (m_id,callBack) {
    this.find({movie_id:m_id,check:true},callBack)
}

comment.statics.findAll=function (callBack) {
    this.find({},callBack)
}
var commentModel=mongoose.model('comment',comment)
module.exports=commentModel
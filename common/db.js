var mongoose=require('mongoose')
var url='mongodb://localhost/movieServer'

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err){
        console.log(err)
    }else{
        console.log('连接成功')
    }
})
module.exports=mongoose
const mongoose=require("mongoose")
require('dotenv').config()

const postSchema=mongoose.Schema({
    // title ==> String
    // body ==> String
    // device ==> String
    // no_if_comments ==> Number

title:{type:String,required:true},
body:{type:String,required:true},
device:{type:String,required:true},
no_if_comments:{type:Number,required:true},

},{
    versionKey:false
})

const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}
const mongoose=require("mongoose")
require('dotenv').config()

const userSchema=mongoose.Schema({
//     name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String

name:{type:String,required:true},
email:{type:String,required:true},
gender:{type:String,required:true},
password:{type:String,required:true},
age:{type:Number,required:true},
city:{type:String,required:true},

},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}
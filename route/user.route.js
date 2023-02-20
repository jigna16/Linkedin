const express=require("express")
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
require('dotenv').config()

const{UserModel}=require("../model/register.model")

const userRouter=express.Router()

//for registering details 
userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,age,city}=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
           if(err){
            console.log(err)
            res.send({"msg":"getting error while hashing","err":err.message})
           }else{
            const user= new UserModel({name,email,gender,password:hash,age,city})
            await user.save()
            res.send({"msg":"user has been registered"})
           }
        });
    }catch(err){
        console.log(err)
        res.send({"msg":"can't be registered","err":err.message})
    }
   
   
})


// logging in details
userRouter.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
    const user= await UserModel.find({email})
        if(user){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(err){
    
                    res.send({"msg":"wrong credentails","err":err.message})

                }else{
                    const token = jwt.sign({ userID: user[0]._id }, 'masai');
                    res.send({"msg":"user has been logged in","token":token})
                }
            });
           
        }
    }catch(err){
        res.send({"msg":"can't logged in","err":err.message})
    }
   
})

module.exports={
    userRouter
}

// "name":"ram",
// "email":"ram@gmail.com",
// "gender":"male",
// "password":"ram",
// "age":"23",
// "city":"delhi"
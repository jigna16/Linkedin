const express=require("express")
require('dotenv').config()
const app=express()
const {connection}=require("./db")
const {userRouter}=require("./route/user.route")
const {postRouter}=require("./route/post.route")
const{authenticate}=require("./Middleware/authenticate.middleware")
require('dotenv').config()

app.use(express.json())

app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)

app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(`${process.env.port}`,async()=>{
    try{
        await connection
        console.log("connected to db")
    }catch(err){
        console.log("can't connected to db")
    }
    console.log("server is running on 8000 port")
})
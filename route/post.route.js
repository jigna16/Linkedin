const express=require("express")
const {PostModel}=require("../model/post.model")
const postRouter=express.Router()
require('dotenv').config()


//for getting all the posts
postRouter.get("/",async(req,res)=>{
    const query=req.params.query
    try{
        const post=await PostModel.find(query)
        res.send(post)
    }catch(err){
        res.send({"msg":"cant get all posts","err":err.message})
    }
})


//for creating all the posts
postRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const post=new PostModel(payload)
        await post.save()
        res.send("post has been created")
    }catch(err){
        res.send({"msg":"getting error while posting","err":err.message})

    }
})



//for updating the posts
// postRouter.patch("/update/:id",async(req,res)=>{
//     const id=req.params.id
//     const payload=req.body
//     const post=await PostModel.findOne({_id:id})
//     const userID_in_posts=post.userID
//     const userID_making_requests=req.body.userID
//     try{
//         if(userID_making_requests!==userID_in_posts){
//            res.send({"msg":"not authorised","err":err.message}) 
//         }else{
//             await PostModel.findByIdAndUpdate({_id:id},payload)
//             res.send({"msg":"post has been updated"})
//         }

//     }catch(err){
//         console.log(err)
//         res.send({"msg":"something went wrong","err":err.message}) 
//     }
    
// })


//for updating posts
postRouter.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    const payload=req.body
    try{
        await PostModel.findByIdAndUpdate({_id:id},payload)
        res.send({"msg":"successfully updated"}) 
        
    }catch(err){
        res.send({"msg":"can't updated","err":err.message}) 

    }
})



//for deleting the posts
postRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        await PostModel.findByIdAndDelete({_id:id})
        res.send({"msg":"successfully deleted"}) 
        
    }catch(err){
        res.send({"msg":"can't deleetd","err":err.message}) 

    }
})







module.exports={
    postRouter
}
const jwt=require("jsonwebtoken")
require('dotenv').config()
const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded = jwt.verify(token, 'masai');
        if(decoded){
            const userID=decoded.userID
            console.log(userID)
            console.log(decoded)
            req.body.userID=userID
            next()
        }else{
        res.send({"msg":"login first","err":err.message})
        }
    
    }else{
        res.send({"msg":"login first","err":err.message})

    }
}

module.exports={
    authenticate
}
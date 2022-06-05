const express = require("express");

const userRouter = express.Router();
const user = require("../routes/user")

//post user
userRouter.post("/login", (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    res.send({msg:`your email is ${email} and your password is ${password}`})
})
//get user
userRouter.get("/",(req,res)=> {
    let date= new Date();
    let hours= date.getHours();
    if(hours>8 && hours<18){
        res.render("opened" , {hours : hours})
    }else{
        res.render("closed");
    }
})
//delete user

//update user



module.exports=userRouter;
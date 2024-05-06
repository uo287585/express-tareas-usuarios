const express = require("express")
let routerUsers = express.Router()
let users = require("../data/users")

routerUsers.get("/", (req,res)=>{
    let email = req.query.email
    if(email!=undefined){
        let usersEmail = users.filter(u=>u.email==email)
        res.send(usersEmail)
        return
    }
    res.send(users)
})



routerUsers.get("/:id",(req,res)=>{
    let id = req.params.id
    let user = users.find((t)=>t.id==id)
    if (user == undefined){
        res.send("Error")
        return
    }
    res.send(user)
})

module.exports = routerUsers
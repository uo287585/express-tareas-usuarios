const express = require("express")
let app = express()

let tasks = [
    {id:1, text:"hacer la compra"},
    {id:2, text:"pagar la luz"},
    {id:3, text:"revisar facturas"}
]

let users = [
    {id: 1, email: "user1", password:"user1"},
    {id: 2, email: "user2", password:"user2"}
]

app.get("/tasks", (req,res)=>{
    let text = req.params.text
    if(text!=undefined){
        let tasksText = tasks.filter(t=>t.text.indexOf(text)!=-1)
        res.send(tasksText)
        return
    }
    res.send(tasks)
})

app.get("/users", (req,res)=>{
    let email = req.query.email
    if(email!=undefined){
        let usersEmail = users.filter(u=>u.email==email)
        res.send(usersEmail)
        return
    }
    res.send(users)
})

//param id
app.get("/tasks/:id",(req,res)=>{
    let id = req.params.id
    let task = tasks.find((t)=>t.id==id)
    if (task == undefined){
        res.send("Error")
        return
    }
    res.send(task)
})

app.get("/users/:id",(req,res)=>{
    let id = req.params.id
    let user = users.find((t)=>t.id==id)
    if (user == undefined){
        res.send("Error")
        return
    }
    res.send(user)
})

app.listen(8081, ()=>{
    console.log("Conectado puerto 8081")
})
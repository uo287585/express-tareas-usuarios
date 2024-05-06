const express = require("express")
let routerTasks = express.Router();
let tasks = require("../data/tasks")

routerTasks.get("/", (req,res)=>{
    let text = req.params.text
    if(text!=undefined){
        let tasksText = tasks.filter(t=>t.text.indexOf(text)!=-1)
        res.send(tasksText)
        return
    }
    res.send(tasks)
})

//param id
routerTasks.get("/:id",(req,res)=>{
    let id = req.params.id
    let task = tasks.find((t)=>t.id==id)
    if (task == undefined){
        res.send("Error")
        return
    }
    res.send(task)
})

module.exports = routerTasks
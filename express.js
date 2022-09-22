// Create a server using express and create route /api/main and send the response explaining what is express

const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send(`Welcome to my main page`)
});

app.get("/home",(req,res)=>{
    res.send(`hello from express server at homepage`)
});

app.get("/about",(req,res)=>{
    res.send(`hello from express server at port 9000 from aboutpage `)
});

app.get("/home/about",(req,res)=>{
    res.send(`hello from express server at port 9000 from aboutpage and Welcome to my main page`)
});

app.listen(9000,()=>{
    console.log("server is running from port 9000");
})

// application

// get-read
// post-create
// put-update
// delete-del
//const cors = require("cors")


const dotenv = require('dotenv');
//import express
const express = require('express');
const app = express();

//app.use(cors);
//connect to database
dotenv.config({path:'./config.env'});

require('./db/conn')
//const User = require('./model/userSchema');

//middleware to convert json to string
app.use(express.json());

//we link the router file to make our routes easy
app.use(require('./router/auth'));

//initilizing port ti keep it safe
const PORT = process.env.PORT;


//Middleware
const middlewar =(req,res,next)=>{
    console.log("i am middleware")
    next();
}



//apis
app.get('/' , (req,res)=>{
    res.send(`Hello world from the server app.js`);
})

app.get('/about' ,middlewar, (req,res)=>{
    res.send(`Hello about`);
})

app.get('/contact' , (req,res)=>{
    res.send(`hello contact`);
})

app.get('/signin' , (req,res)=>{
    res.send(`hello login`);
})


app.get('/signup' , (req,res)=>{
    res.send(`hello registrition`);
})
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})

const DB = process.env.DATABASE;
const mongoose = require('mongoose');

mongoose.connect(DB).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})

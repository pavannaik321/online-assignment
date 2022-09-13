const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');





require('../db/conn')

//schemas
const User = require('../model/userSchema')




router.get('/', (req, res) => {
    res.send(`Hello world from the server router.js`);
})

//using promises

/* router.post('/register', (req,res)=>{

    //object distructuring
    const {name,email,phone,work,password,cpassword } =req.body;

    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error:"please fill all the details"});
        
    }

    //checking if email already exist
    User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: "email already exist"});
        }

        const user = new User({name , email ,phone , work , password , cpassword })

        user.save().then(()=>{
            res.status(201).json({message : "user registered succesfully"});
        }).catch((err)=>{res.status(500).json({err:"user not registered"})});
    }).catch(err =>{console.log(err)});

})
 */


//using async
router.post('/register', async (req, res) => {

    //object distructuring
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "please fill all the details" });

    }
    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();

        res.status(200).json({ message: "user registered successfully" });

        console.log(req.body);

    }
    catch (err) {
        console.log(err);
    }

})


//login

router.post("/signin", async (req, res) => {
    console.log(req.body);



    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please fill login details" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)


            const token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, { //name of cookie and what we hav to add
                expires: new Date(Date.now() + 25892000000),//expire day of cookies in ms
                httpOnly: true
            });

            if (isMatch) {
                return res.status(200).json({ Success: "you are in login successfull" });
            }
            else {
                res.status(400).json({ error: "invalid Password" });
            }

        }
        else {
            res.status(400).json({ error: "invalid username" });
        }

    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;
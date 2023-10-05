const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require('./models/User');
const { login, signup } = require('./connections/User'); 
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/login',(req,res)=>{
    res.send("login")
});

app.get('/signup',(req,res)=>{
    res.send("Signup")
});


app.post('/login', login);
app.post('/signup', signup);


mongoose.connect("mongodb+srv://paras22350:Paras%407387@cluster0.q2k6uth.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("succes mongoji");
    app.listen(5200, () => {
        console.log("server started on port 5200");
    })
}).catch((error) => { console.log("not so success" + error) })



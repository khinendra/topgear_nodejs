const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
//map global promise - get rid of warning
//mongoose.Promise = global.Promise;
//connect to database
mongoose.connect("mongodb://localhost/student-db",{
   // useMongoClient:true
   useNewUrlParser:true
})
.then( ()=> console.log('Mongodb connected'))
.catch(err => console.log("error"));

//
require('./models/student');
const Student = mongoose.model('students');

//handlebar middleware
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
app.set('view engine','handlebars');

app.get('/index',(req,res)=>{
    res.render('index');
})

app.use('/',(req, res, next)=>{
    console.log("i m in handler");
    req.username = 'Khinendra';
    next();
})
app.get('/',(req, res)=>{
    username = req.username;
    res.send(`Are you looking for something? ${username}`);

})
app.get('/registration',(req, res)=>{
    res.send("welcome to my application.")
})

app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
})
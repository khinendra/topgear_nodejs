const express = require('express');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');


const app = express();
const port = 5000;
//map global promise - get rid of warning
mongoose.Promise = global.Promise;
//connect to database
mongoose.connect("mongodb://localhost/student-db",{
   // useMongoClient:true
   useNewUrlParser:true
})
.then( ()=> console.log('Mongodb connected'))
.catch(err => console.log("error"));

// Express session midleware

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));
  
  app.use(flash());
  
  // Global variables
  app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
//
require('./models/student');
const Student = mongoose.model('students');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Process Form
app.post('/students', (req, res) => {
    let errors = [];
    if(!req.body.fname){
      errors.push({text:'Please add a first name'});
    }
    if(!req.body.lname){
        errors.push({text:'Please add a last name'});
    }
    if(errors.length > 0){
      res.render('registration/add_stdnt', {
        errors: errors,
        fname: req.body.fname,
        lname: req.body.lname,
        course: req.body.course
      });
    } else {
      const newUser = {
        firstName: req.body.fname,
        lastName: req.body.lname,
        courseEnroll: req.body.course
      }
      new Student(newUser)
        .save()
        .then(student => {
          req.flash('success_msg', 'Student added');
         res.redirect('/confirm');
        })
    }
  });

app.get('/confirm',(req, res)=>{
    Student.find({})
        .sort({registrationDate:'desc'})
        .then(student=>{
            res.render('confirm',{
                student:student
            });
        });  
})

//handlebar middleware
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
app.set('view engine','handlebars');

app.get('/about',(req,res)=>{
    res.render('about_ur');
})

app.get('/registration',(req, res)=>{
    res.render("registration/add_stdnt")
})

app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
})

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
      title: title
    });
  });
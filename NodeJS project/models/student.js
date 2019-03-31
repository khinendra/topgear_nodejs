const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const StudentSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        required:true
    },
    courseEnroll:{
        type:String,
        required:true
    },
    registrationDate:{
        type:Date,
        default:Date.now
    }
});

mongoose.model('students',StudentSchema);
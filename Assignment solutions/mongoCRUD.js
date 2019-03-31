const mongo = require('mongodb');
const url = 'mongodb://localhost/mydb';

mongo.connect(url, function(err, db){
    if(err){
        console.log('error creating db');
        throw err;
    }
    useNewUrlParser:true;
    console.log("Database created.");
    var dbo = db.db('mydb');
 dbo.createCollection('customers', function(err, res){
     if(err) throw err;
     console.log("collection Created");
 });
 
 //Create
 var customer1 = {name:'Aditya', city:'Bengluru'};
 dbo.collection('customers').insertOne(customer1, function(err, res){
     console.log('1 customer document inserted.')
 })
 //Read
 dbo.collection('customers').find({}).toArray(function(err, res){
     console.log(res);
 })
 //Update
var query = {'city':'Bengluru'};
var newval = { $set:{name:'Aditya',city:'Chennai'}};
dbo.collection('customers').updateOne(query,newval, function(err, res){
    console.log('updated.')
})
 //Delete
var delQuery = {city:'Chennai'};
dbo.collection('customers').deleteOne(delQuery, function(err, obj){
    console.log('deleted');
})
 db.close();
});
console.log('mongodb CRUD Operations in progress .....');
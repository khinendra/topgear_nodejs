var mongo = require('mongodb');
var url = "mongodb://localhost/";

mongo.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("test");
    //var query = {name : 'Khinendra'};
    dbo.collection("cats").find().toArray(function(err, result){
        if (err) throw err;
        console.log(result);
        db.close();
    })
})
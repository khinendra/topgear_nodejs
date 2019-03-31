var fs = require("fs");
var dir = "./TestDir2/";
fs.readdir(dir, function(err, files){
    if(err){
        console.log("Can not scan.");
        return;
    }
    files.forEach(function(file){
        console.log(file);
    })
});
console.log("Scanning directory...");

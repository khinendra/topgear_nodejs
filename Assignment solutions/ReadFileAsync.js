var fs=require("fs");
fs.readFile("./TestDir/file1.txt", function(error,content){
    console.log(content.toString());
});
console.log("Proceeding to other db steps");
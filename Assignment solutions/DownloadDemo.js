var http = require('http');
var fs = require('fs');
htmlfile = "./TestDir/download.html"
var options = {
	host: 'www.google.com',
	port: ''    
};
var str="here is response from google.com..........\n";
var req=http.get(options,function(response) {
	response.on('data', function (chunk) {
    str += chunk;
  });
  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
   fs.writeFile(htmlfile,str, function(err){
       if(err){
           throw err;
       }
       console.log("file has been saved.")
   })
  });
  response.on('error',function(msg) {
	  console.log("Error:"+msg);
  });
});
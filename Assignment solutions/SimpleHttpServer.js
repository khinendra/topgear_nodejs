var http = require("http");
http.createServer((req, resp)=>{
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.write(" Hello World, this is simple http server.");
    resp.end();
}).listen(9090);
console.log("Server is running at port 9090");
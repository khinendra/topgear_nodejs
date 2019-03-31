var fs = require("fs");
filePath = "./TestDir/file1.txt";
content = fs.readFileSync(filePath);
console.log(content.toString());
console.log("Done with reading file.")
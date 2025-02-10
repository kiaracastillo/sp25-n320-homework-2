const path = require("path");
console.log("Valentine Path:", path.resolve("valentine"));


const functionsFolder = path.resolve("functions", "amor");

console.log("Functions index.js:", path.join(functionsFolder, "index.js"));

console.log("Functions functions: ", path.join(functionsFolder, "functions"));

console.log("Basename of functions directory", path.basename( functionsFolder));
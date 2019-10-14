//var logger = require('./logger');
//logger.log('msg');
//logger.log1('msg')

//const path = require('path');
//var pathObj = path.parse(__filename);
//console.log(pathObj);


const os = require('os');
var totalMem = os.totalmem();
var freeMem = os.freemem();


console.log(totalMem);
console.log(freeMem);

console.log("dir name",__dirname);
console.log("fl name",__filename);
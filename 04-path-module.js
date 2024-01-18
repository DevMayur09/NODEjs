const { log } = require('console');
const path = require('path');

const separator = path.sep;
console.log("separator " + separator);

const filePath = path.join('content','subfolder','sub_sub_folder','text.txt');
console.log("filepath " + filePath);

const base = path.basename(filePath);
console.log("base " + base);

const absolute = path.resolve(__dirname,'content','subfolder','sub_sub_folder','text.txt');
console.log("absolute "+absolute);
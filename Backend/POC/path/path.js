//  * Add all path-related methods in this module.

const path = require('path');

const fullPath = path.join( 'Backend', 'POC', 'path', 'path.js');
console.log("Full path to the file:", fullPath);

const absolutePath = path.resolve('Backend', 'POC', 'path', 'path.js');
console.log("Absolute path to the file:", absolutePath);


const fileName = path.basename(fullPath);
console.log("File name:", fileName);

const extensionName = path.extname(fullPath);
console.log("File extension:", extensionName);

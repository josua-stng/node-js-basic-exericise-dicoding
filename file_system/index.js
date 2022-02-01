// Synchronus item

import fs from "fs";
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);

// run code (../file_system/index.js)
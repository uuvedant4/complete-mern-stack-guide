const os = require("os");
const path = require("path");
const { add, sub, mul, div } = require("./math");
// const math = require("./math");

console.log("Hello World!");
// console.log(global);

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(add(3, 6));
console.log(sub(3, 6));
console.log(div(3, 6));
console.log(mul(3, 6));

const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "/files/starter.txt");
const filePath2 = path.join(__dirname, "/files/lorem.txt");

const rs = fs.createReadStream(filePath1, { encoding: "utf-8" });
const ws = fs.createWriteStream(filePath2);

/*
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
  console.log(dataChunk);
});
*/

rs.pipe(ws);

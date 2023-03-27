const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "files/starter.txt");
const filePath2 = path.join(__dirname, "files/new.txt");
const filePath3 = path.join(__dirname, "files/test.txt");
const filePath4 = path.join(__dirname, "files/renamed.txt");

fs.readFile(filePath1, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log("Hello, I'm learning node.js.");

fs.writeFile(filePath2, "NARUTO is an amazing anime!", (err) => {
  if (err) {
    throw err;
  }
  console.log("Write complete.");
});

fs.appendFile(filePath3, "Just appending some random text.\n", (err) => {
  if (err) {
    throw err;
  }
  console.log("Append complete.");
});

fs.rename(filePath3, filePath4, (err) => {
  if (err) {
    throw err;
  }
  console.log("Rename complete.");
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

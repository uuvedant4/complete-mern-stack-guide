const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "new");

if (!fs.existsSync(filePath)) {
  fs.mkdir(filePath, (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory created!");
  });
}

if (fs.existsSync(filePath)) {
  fs.rmdir(filePath, (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory deleted!");
  });
}

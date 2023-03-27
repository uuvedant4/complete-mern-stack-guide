const fsPromises = require("fs").promises;
const path = require("path");

const filePath1 = path.join(__dirname, "files/starter.txt");

const fileOps = async () => {
  try {
    let data = await fsPromises.readFile(filePath1, "utf-8");
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "/files/promiseFile.txt"),
      data + "\n"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "/files/promiseFile.txt"),
      "Nice to meet you!"
    );
    await fsPromises.rename(
      path.join(__dirname, "/files/promiseFile.txt"),
      path.join(__dirname, "/files/promiseComplete.txt")
    );
    data = await fsPromises.readFile(
      path.join(__dirname, "/files/promiseComplete.txt"),
      "utf-8"
    );
    await fsPromises.unlink(filePath1);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

console.log("Hello, I'm learning node.js.");

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// 37:31

const express = require("express");
const path = require("path");
const cors = require("cors");
const { logger, logEvents } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;

// Custom middleware logger
app.use(logger);

// Cross origin resource sharing (Third party middleware)
const whiteList = ["http://localhost:5000", "https://www.google.com/"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS."));
    }
  },
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Built-in middleware to handle urlencoded data
// in other words, form data:
// content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/subdir", express.static(path.join(__dirname, "/public")));

app.use("/", require("./routes/root"));
app.use("/subdir", require("./routes/subdir"));
app.use("/employees", require("./routes/api/employees"));

// app.use("/")
app.all("/*", (req, res) => {
  res.statusCode = 404;
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404: Page Not Found" });
  } else {
    res.type("txt").send("404: Page Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running at port http://localhost:${5000}/.`)
);

const express = require("express");
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;

// Custom middleware logger
app.use(logger);
app.use(cors(corsOptions));

// Built-in middleware to handle urlencoded data, in other words, form data: content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// setting routes
app.use("/", require("./routes/api/root"));
app.use("/register", require("./routes/api/register"));
app.use("/auth", require("./routes/api/auth"));
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

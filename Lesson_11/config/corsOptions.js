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

module.exports = corsOptions;

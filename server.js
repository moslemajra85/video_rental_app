require("dotenv").config();
const express = require("express");
const colors = require("colors");

const app = express();

// roote: http:://localhost:9000
app.get("/", (req, res) => {
  res.send("Hello this is a message From Moslem server");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode...`
      .bgGreen.black
  );
});

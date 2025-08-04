require("dotenv").config();
const express = require("express");
const colors = require("colors");
const connectDB = require("./config");
const Genre = require("./models/genre");
const genresRoutes = require("./routes/genresRoutes");
const customersRoutes = require("./routes/customersRoutes");

const app = express();
app.use(express.json());

app.use("/api/videoapp/genres", genresRoutes);
app.use("/api/videoapp/customers", customersRoutes);
connectDB();

// roote: http:://localhost:9000

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode...`
      .bgGreen.black
  );
});

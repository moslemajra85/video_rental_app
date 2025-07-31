require("dotenv").config();
const express = require("express");
const colors = require("colors");
const connectDB = require("./config");
const Genre = require("./models/genre");

const app = express();

app.use(express.json());

connectDB();

// roote: http:://localhost:9000
app.get("/", (req, res) => {
  res.send("Hello this is a message From Moslem server");
});

app.post("/api/videoapp/genres", async (req, res) => {
  try {
    // create a new genre
    const genre = new Genre(req.body);

    // save the genre
    const result = await genre.save();

    // send result to the client
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/videoapp/genres", async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/videoapp/genres/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const genre = await Genre.findById(id);

    if (!genre) {
      res.status(404).send("Genre was not found!");
    }

    res.status(200).send(genre);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode...`
      .bgGreen.black
  );
});

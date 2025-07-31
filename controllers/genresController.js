const Genre = require("../models/genre");

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createGenre = async (req, res) => {
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
};

const getGenre = async (req, res) => {
  try {
    const id = req.params.id;

    const genre = await Genre.findById(id);

    if (!genre) {
      res.status(404).send("Genre not found");
      return;
    }

    res.status(200).send(genre);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateGenre = async (req, res) => {
  try {
    const id = req.params.id;

    const genres = await Genre.findByIdAndUpdate(id, req.body);

    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteGenre = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await Genre.findByIdAndDelete(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getGenres,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre,
};

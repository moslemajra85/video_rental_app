const Movie = require("../models/movie");
const Genre = require("../models/genre");
const req = require("express/lib/request");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);

    if (!movie) {
      res.status(404).send("Movie not found");
      return;
    }

    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const createMovie = async (req, res) => {
  try {
    let genre = await Genre.findById(req.body.genre);
    if (!genre) {
      return res.status(404).send("Genre not found");
    }
    const movie = new Movie({
      ...req.body,
    });

    const result = await movie.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateMovie = async (req, res) => {};
const deleteMovie = async (req, res) => {};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};

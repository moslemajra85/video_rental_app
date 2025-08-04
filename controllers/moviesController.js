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

const getMovie = async (req, res) => {};
const createMovie = async (req, res) => {};
const updateMovie = async (req, res) => {};
const deleteMovie = async (req, res) => {};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};

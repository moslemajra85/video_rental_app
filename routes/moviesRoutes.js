const express = require("express");
const {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviesController");

const Router = express.Router();


Router.get("/", getMovies);
Router.get("/:id", getMovie);
Router.post("/", createMovie);
Router.put("/:id", updateMovie);
Router.delete("/:id", deleteMovie);

module.exports = Router;
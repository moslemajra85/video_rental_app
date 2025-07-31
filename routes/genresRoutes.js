const express = require("express");
const Router = express.Router();

const {
  getGenres,
  createGenre,
  getGenre,
  updateGenre,
  deleteGenre
} = require("../controllers/genresController");

Router.get("/", getGenres);
Router.post("/", createGenre);
Router.get("/:id", getGenre);
Router.put('/:id', updateGenre)
Router.delete('/:id', deleteGenre)

module.exports = Router;

const express = require("express");
const Router = express.Router();

const {
  getGenres,
  createGenre,
  getGenre,
  updateGenre
} = require("../controllers/genresController");

Router.get("/", getGenres);
Router.post("/", createGenre);
Router.get("/:id", getGenre);
Router.put('/:id', updateGenre)

module.exports = Router;

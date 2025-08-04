const { number } = require("joi");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
    min: 2,
    max: 50,
  },

  numberInStock: {
    type: Number,
    required: true,
  },

  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
});


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

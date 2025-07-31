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


const getGenre = async(req, res) => {


    try {
        
    } catch (error) {
        
    }
}

module.exports = {
  getGenres,
  createGenre,
  getGenre
};

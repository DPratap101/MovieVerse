// backend/models/movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    rank: { type: Number, required: true },
    year: { type: Number, required: true },
    imbd_votes: { type: Number, required: true },
    imdb_rating: { type: Number, required: true },
    certificate: { type: String, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    cast_id: { type: String, required: true },
    cast_name: { type: String, required: true },
    director_id: { type: String, required: true },
    director_name: { type: String, required: true },
    writter_name: { type: String, required: true },
    writter_id: { type: String, required: true },
    img_link: { type: String, required: true },
    title: { type: String, required: true },
}, { collection: 'movies_dir' }); // Specify the collection name here

const MovieModel = mongoose.model('Movie', movieSchema);

module.exports = MovieModel;

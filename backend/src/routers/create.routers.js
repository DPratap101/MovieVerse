const express = require("express");
const MovieModel = require("../models/db.model"); 
const router = express.Router();

// Create a new movie
router.post('/', async (req, res) => {
    const { 
        rank, 
        title, 
        year, 
        imbd_votes, 
        imdb_rating, 
        certificate, 
        duration, 
        genre, 
        cast_id, 
        cast_name, 
        director_id, 
        director_name, 
        writter_name, 
        writter_id, 
        img_link 
    } = req.body;

    // Basic validation
    if (!title || !year || !imdb_rating || !genre) {
        return res.status(400).json({ message: 'Validation Error: Missing required fields (title, year, imdb_rating, genre).' });
    }

    // Check if 'year' is a valid number
    if (isNaN(year)) {
        return res.status(400).json({ message: 'Validation Error: Year must be a valid number.' });
    }

    // Create a new movie instance
    const newMovie = new MovieModel({
        rank,
        title,
        year,
        imbd_votes,
        imdb_rating,
        certificate,
        duration,
        genre,
        cast_id,
        cast_name,
        director_id,
        director_name,
        writter_name,
        writter_id,
        img_link
    });

    try {
        const savedMovie = await newMovie.save(); 
        res.status(201).json(savedMovie); 
    } catch (error) {
        console.error('Error saving movie:', error);
        res.status(400).json({ message: 'Error saving movie' }); 
    }
});

module.exports = router;

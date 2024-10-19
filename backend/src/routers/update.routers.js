// backend/routes/updateMovie.js
const express = require("express");
const MovieModel = require("../models/db.model");
const router = express.Router();


router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const updatedMovie = await MovieModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(updatedMovie);
    } catch (error) {
        console.error('Error updating movie:', error);
        res.status(400).json({ message: 'Error updating movie' });
    }
});

module.exports = router;


const express = require("express");
const MovieModel = require("../models/db.model");
const router = express.Router();

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMovie = await MovieModel.findByIdAndDelete(id);
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ message: 'Error deleting movie' });
    }
});

module.exports = router;

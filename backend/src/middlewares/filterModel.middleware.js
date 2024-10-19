const filterMovies = (req, res, next)=>{
    const { genre, year, minRating, minDuration, title } = req.query;

    // Initialize an empty filter object
    const filters = {};

    // Add filters based on query parameters
    if (title) filters.title = { $regex: title, $options: 'i' };
    if (genre) filters.genre = genre;
    if (year) filters.year = year;
    if (minRating) filters.imdb_rating = { $gte: minRating };
    if (minDuration) filters.duration = { $gte: minDuration };

    // Attach the filters to the request object
    req.filterMovies = filters;

    // Proceed to the next middleware or route handler
    next();
}

module.exports = filterMovies
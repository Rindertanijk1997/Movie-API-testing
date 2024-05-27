import express from 'express';
import { movies, actors } from '../config/data.js';

const router = express.Router();

router.get('/', (req, res) => {
    const { category, year, actor } = req.query;
    let filteredMovies = movies;

    if (category) {
        filteredMovies = filteredMovies.filter(Movie => Movie.category === category);
    }

    if (year) {
        filteredMovies = filteredMovies.filter(Movie => Movie.year === Number(year));
    }
    if (actor) {
        const foundActor = actors.find(a => a.name === actor);
        filteredMovies = filteredMovies.filter(Movie => Movie.actors.includes(foundActor.id));
    }

    res.json(filteredMovies);
});

router.get('/categories', (req, res) => {
    const categories = [];
    movies.forEach(movie => {
        if (!categories.includes(movie.category)) {
            categories.push(movie.category);
        }
    });
    res.json(categories);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id);
    res.json(movie);
});
        
    

export default router;
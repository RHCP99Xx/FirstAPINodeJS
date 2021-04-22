const {Router, request} = require('express');
const under = require('underscore');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) =>{
    res.json(movies);
});

router.post('/', (req, res) => {
    const id = movies.length + 1;
    const { title, director, year, rating } = req.body;
    const newMovie = { ...req.body, id };
    if (id && title && director && year && rating) {
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    under.each(movies, (movie, i)=>{
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send('deleted');
    const { } = req.params;
});

router.put('/:id', (req, res) =>{
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        under.each(movies, (movie, i) =>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'There was an error'});
    }
});

module.exports = router;
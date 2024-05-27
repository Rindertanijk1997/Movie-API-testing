import express from 'express';
import moviesRouter from './routes/movies.js'
import actorsRouter from './routes/actors.js'

const app = express();
const PORT = 8080;

//Middleware
app.use(express.json());

//Routes
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);


app.listen( PORT, () => {
    console.log(`server is running on port ${PORT}..`);
});
import React from 'react';
import styles from './movie_list.module.css';
import MovieItem from '../movie_item/movie_item';

const MovieList = ({ movies, selectMovie }) => {
    console.log(movies);
    return(
        <ul className={styles.list}>
            {movies.map(movie => (
                <MovieItem movie={movie} selectMovie={selectMovie}/>
            ))}
        </ul>
    );
};

export default MovieList;
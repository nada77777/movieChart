import React from 'react';
import styles from './movie_list.module.css';
import MovieItem from '../movie_item/movie_item';

const MovieList = ({ movies }) => {
    console.log(movies);
    return(
        <ul className={styles.list}>
            {movies.map(movie => (
                <MovieItem movie={movie}/>
            ))}
        </ul>
    );
};

export default MovieList;
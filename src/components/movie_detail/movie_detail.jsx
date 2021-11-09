import React from 'react';
import styles from './movie_detail.module.css';
const MovieDetail = ({ movieInfo }) => {
   const {
    // backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_count,
    vote_average,
    budget,
    runtime,
    overview
   } = movieInfo;
console.log(movieInfo);
    return (
        <section className={styles.detail}>
            <div className={styles.movie}>
                <div className={styles.movie__poster}>
                    <img alt="img" src={`'http://image.tmdb.org/t/p/w1280/'${poster_path}`}/>
                </div>
                <div className={styles.movie__info}>
                    <h2 className={styles.title}>{original_title}</h2>
                    <p className={styles.overview}>{overview.slice(0,111)}...</p>
                    <div className={styles.movie__detail__info}>
                        <div>
                            <h4>Original Release</h4>
                            <p>{release_date}</p>
                        </div>
                        <div>
                            <h4>Running Time</h4>
                            <p>{runtime}</p>
                        </div>
                        <div>
                            <h4>Budget</h4>
                            <p>{budget}</p>
                        </div>
                        <div>
                            <h4>Running Time</h4>
                            <p>{release_date}</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MovieDetail;
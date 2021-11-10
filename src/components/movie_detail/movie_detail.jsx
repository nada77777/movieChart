import React from 'react';
import styles from './movie_detail.module.css';
const MovieDetail = ({ location }) => {
   const {
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_count,
    vote_average,
    overview
   } = location.state;
    console.log(location)
    return (
        <section className={styles.detail}>
            <div className={styles.background__opacity}>
            </div>
            <div className={styles.background}>
                <img alt="bg" src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`}/>
            </div>
            <div className={styles.movie}>
                <div className={styles.movie__poster}>
                    <img alt="img" src={`http://image.tmdb.org/t/p/w1280/${poster_path}`}/>
                </div>
                <div className={styles.movie__info}>
                    <h2 className={styles.title}>{original_title}</h2>
                    <p className={styles.overview}>{overview}...</p>
                    <div className={styles.movie__detail__info}>
                        <div>
                            <h4>Vote Average</h4>
                            <p>{vote_average}</p>
                        </div>
                        <div>
                            <h4>Original Release</h4>
                            <p>{release_date}</p>
                        </div>
                        <div>
                            <h4>Vote Count</h4>
                            <p>{vote_count}</p>
                        </div>
                        <div>
                            <h4>Empty Space</h4>
                            <p>blahblahblah</p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default MovieDetail;
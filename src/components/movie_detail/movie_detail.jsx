import React from 'react';
import styles from './movie_detail.module.css';
const MovieDetail = ({ location }) => {
   const {
    // backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_count,
    vote_average,
    overview
   } = location.state;
    return (
        <section className={styles.detail}>
            <div className={styles.movie}>
                <img alt="img" src={"https://image.tmdb.org/t/p/w500"+ poster_path.toString()}/>
                <div className={styles.movieInfo}>
                    <h1 className={styles.title}>{original_title}</h1>
                    <h2 className={styles.release}>개봉일 {release_date}</h2>
                    <p className={styles.vote}>투표 수 {vote_count}</p>
                    <p className={styles.average}>평점</p>
                    <div className={styles.star__rating}>
                        <div className={styles.star__top} style={{width: vote_average * 8.5}}>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                        </div>
                        <div className={styles.star__bottom}>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                            <span className={styles.star}>★</span>
                        </div>
                    </div>
                    <pre className={styles.desc}>{(overview.slice(0,220))}...</pre>
                </div>
            </div>
        </section>
    );
};

export default MovieDetail;
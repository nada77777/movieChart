import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movie_item.module.css';
const MovieItem = ({ movie, selectMovie }) => {
    const onClick = () => {
        selectMovie(movie)
    }

    const {
         id,
         backdrop_path,
         poster_path,
         original_title,
         release_date,
         vote_count,
         vote_average,
         overview
        } = movie;

        // const getInfo = () => {
        //     getMovieDetail(id)
        // };
    
    return(
        <li className={styles.container}>
          <Link to={{pathname: `/detail/${id}`,
                     state:{
                        id,
                        backdrop_path,
                        poster_path,
                        original_title,
                        release_date,
                        vote_count,
                        vote_average,
                        overview,
                     }
                     }} style={{ textDecoration: 'none' }}>
            <div className={styles.movie} onClick={onClick}>
                <img alt="img" src={"https://image.tmdb.org/t/p/w500"+ poster_path}/>
                <div className={styles.movieInfo}>
                    
                    <h2 className={styles.release}>개봉일 {release_date}</h2>
                    <p className={styles.vote}>투표 수 {vote_count}</p>
                    
                    <div className={styles.star__rating}>
                        <div className={styles.average}>평점</div>
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
                    <h1 className={styles.title}>{original_title}</h1>
                    {/* <pre className={styles.desc}>{(overview.slice(0,220))}...</pre> */}
                </div>
            </div>
          </Link>
        </li>
    );
};

export default MovieItem;
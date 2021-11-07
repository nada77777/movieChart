import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);








// const MovieDetail = ({ movieInfo }) => {
//   const {
//    // backdrop_path,
//    poster_path,
//    original_title,
//    release_date,
//    vote_average,
//    budget,
//    runtime,
//    revenue,
//    genres,
//    overview
//   } = movieInfo;
// console.log(movieInfo);
//    return (
//        <section className={styles.detail}>
//            <div className={styles.movie}>
//                <div className={styles.movie__poster}>
//                    <img alt="img" src={"https://image.tmdb.org/t/p/w500"+ poster_path.toString()}/>
//                </div>
//                <div className={styles.movie__info}>
//                    <h2 className={styles.title}>{original_title}</h2>
//                    <p className={styles.overview}>{overview.slice(0,111)}...</p>
//                    <div className={styles.movie__detail__info}>
//                        <div>
//                            <h4>Original Release</h4>
//                            <p>{release_date}</p>
//                        </div>
//                        <div>
//                            <h4>Running Time</h4>
//                            <p>{runtime}</p>
//                        </div>
//                        <div>
//                            <h4>Budget</h4>
//                            <p>{budget}</p>
//                        </div>
//                        <div>
//                            <h4>Revenue</h4>
//                            <p>{revenue}</p>
//                        </div>
//                        <div>
//                            <h4>Voting Average</h4>
//                            <p>{vote_average}</p>
//                        </div>
//                        <div>
//                            <h4>Genres</h4>
//                            <p>{genres[0]}</p>
//                            <p>{genres[1]}</p>
//                        </div>
//                    </div>

//                </div>
//            </div>
//        </section>
//    );
// };
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import styles from './app.module.css';
import MovieList from './components/movie_list/movie_list';
import MovieDetail from './components/movie_detail/movie_detail';
import SearchHeader from './components/search_header/search_header';

function App() {
  // const [getMovieId, setGetMovieId] = useState();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/movie/popular?language=en&page=1&region=KR&api_key=d9ef57a98583b7c0f9952535f3718bd2", requestOptions)
      .then(response => response.json())
      .then(result => result.results)
      .then(result => setMovies(result))
      .catch(error => console.log('error', error));
  },[]);
 

  const onSearch = (text) => {
    const keyword = encodeURIComponent(text);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d9ef57a98583b7c0f9952535f3718bd2&language=en-US&query=${keyword}&page=1&include_adult=true`, requestOptions)
      .then(response => response.json())
      .then(result => result.results)
      .then(result => {setMovies(result);
                       setSelectedMovie(null)})
      .catch(error => console.log('error', error));
    console.log(text);
  };
  
  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    console.log(selectMovie);
    console.log('select movie',movie);
  }


  // const getMovieDetail = (movieId) => {
  //     const requestOptions = {
  //       method: 'GET',
  //       redirect: 'follow'
  //     };
      
  //     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d9ef57a98583b7c0f9952535f3718bd2`, requestOptions)
  //       .then(response => response.json())
  //       .then(result => result)
  //       .then(result => setMovies(result))
  //       .catch(error => console.log('error', error));
  // };

  // console.log('this',movies);

  
  // console.log(movies.map(movie => (console.log(movie.id))));
  // // console.log(movieInfo);

  return (
    <div className={styles.app}>  
    <SearchHeader search={onSearch}/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">    
          <div className={styles.list}>
            <MovieList movies={movies} selectMovie={selectMovie} />
          </div>
        </Route>
        {/* <Route path="/detail/:id">
          <MovieDetail/>
        </Route> */}
        <Route path="/detail/:id" component={MovieDetail}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

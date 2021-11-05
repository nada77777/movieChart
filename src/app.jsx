import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router";
import styles from './app.module.css';
import MovieList from './components/movie_list/movie_list';
import MovieDetail from './components/movie_detail/movie_detail';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko&page=1&region=KR&api_key=d9ef57a98583b7c0f9952535f3718bd2", requestOptions)
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log('error', error));
  },[]);
  console.log(movies);
  
  
  


  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">    
          <div className={styles.list}>
            <MovieList movies={movies}/>
          </div>
        </Route>
        {/* <Route path="/detail/:id">
          <MovieDetail/>
        </Route> */}
        <Route path="/detail/:id" component={MovieDetail} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

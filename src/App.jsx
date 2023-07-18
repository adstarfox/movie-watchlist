import { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import './App.css'

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => {
    setWatchList([...watchList,movie])
  }

  const getData = () => {
    axios 
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        setMovieList(res.data.results)
      })
  }

  useEffect(() => {
    getData();
  },[page]);

  return (
    <div className='App'>
      <Header />
      <main>
        <MovieScreen WatchList={watchList} Page={page} setPage={setPage} movieList={movieList} addMovie={addMovie}/>
        <Watchlist WatchList={watchList}/>
      </main>
    </div>
  )
}

export default App

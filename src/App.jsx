import { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import MovieScreen from './components/MovieScreen';
// import './App.css'

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios 
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => {
        console.log(res.data.results)
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
        <MovieScreen WatchList={watchList} Page={page} setPage={setPage} movieList={movieList} />
      </main>
    </div>
  )
}

export default App

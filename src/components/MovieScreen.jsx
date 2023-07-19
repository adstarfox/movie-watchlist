import { Fragment } from "react"
import MovieCard from "./MovieCard"


const MovieScreen = ({WatchList, Page, setPage, movieList, addMovie, removeMovie}) => {
    const movieDisplay = movieList.map((movie, index) => {
        return (
        <h2 key={index}>{<MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} WatchList={WatchList}/>}</h2>
        )
    })

    const decrement = () => {
        return setPage(Page - 1)
    }

    const increment = () => {
        return setPage(Page + 1)
    }



    return (
        <div className="page">
            <h1>Alex's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={Page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen
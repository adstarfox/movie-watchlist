import { Fragment } from "react"
import MovieCard from "./MovieCard"


const MovieScreen = ({WatchList, Page, setPage, movieList}) => {
    const movieDisplay = movieList.map((movie, index) => {
        return (
        <h2 key={index}>{<MovieCard movie={movie}/>}</h2>
        )
    })

    return (
        <div className="page">
            <h1>Alex's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen
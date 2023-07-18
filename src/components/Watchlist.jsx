import MovieCard from "./MovieCard"

const Watchlist = ({WatchList}) => {
    const movieDisplay = WatchList.map((movie, index) => {
        return <MovieCard movie={movie} key={index}/>
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default Watchlist
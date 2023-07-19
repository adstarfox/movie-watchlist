import MovieCard from "./MovieCard"

const Watchlist = ({WatchList, removeMovie}) => {
    const movieDisplay = WatchList.map((movie, index) => {
        return <MovieCard movie={movie} key={index} removeMovie={removeMovie} WatchList={WatchList}/>
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
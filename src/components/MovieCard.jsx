

const MovieCard = ({movie, addMovie, removeMovie,WatchList}) => {
    
    const inWatchlist = WatchList.filter((e) => {
        return e.id === movie.id
    })

    const button = inWatchlist.length === 0 ? (<button onClick={() => addMovie(movie)}>Add to List</button>) : (<button onClick={() => removeMovie(movie)}>Remove from List</button>);

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.original_title}'s Poster`} />
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
}

export default MovieCard
import { Link } from "react-router";
import NoPoster from "../assets/NoPoster.png"


function MovieComp(movies) {
    const moviesArray = movies.movies;
    return (
        <>
            {moviesArray.map((movie) => (
                <div className="movie" key={movie.id}> {/* Add a key prop for each movie */}
                    <Link to={`/movie/${movie.id}`}>
                        <img className="movie__poster" src={movie.poster_path === null ? NoPoster : `https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} original poster`} />
                    </Link>
                    <div className="movie__description--wrapper">
                        <h3 className="movie__title">{movie.title}</h3>
                        <div className="movie__rating--wrapper">
                            <svg title="Yellow star icon" className="movie__rating--star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                            </svg>
                            <p className="movie__rating">
                                {movie.vote_average ? movie.vote_average.toFixed(1) : 'NA'}
                                <span className="movie__span">•</span>
                                {movie.original_language}
                                <span className="movie__span">•</span>
                                {movie.release_date ? movie.release_date.split('-')[0] : 'NA'}
                            </p>
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
}

export default MovieComp;

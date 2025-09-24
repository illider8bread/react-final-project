import { useEffect } from "react";
import { useParams } from "react-router";

const Movie = ( {movieArray, onLoad} ) => {
    const {id} = useParams();
    const movie = movieArray.find((movie) => parseInt(movie.id) === parseInt(id));
    // useEffect(()=>{
    //     onLoad
    // }, [])
    return (
        <>
            <section id="display">
                <div className="container">
                    <div className="row">
                        <div className="selected__movie">
                            <div className="movie__img--wrapper">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${movie.title} original poster`} className="movie__img" />
                            </div>
                            <div className="movie__page--description">
                                <h2 className="movie__page--title">
                                    {movie.title}
                                </h2>
                                <div className="movie__page--quick-stats">
                                    <p className="movie__quick-stats movie__quick-stats--language">
                                        <span className="movie__stat--title">Language:</span> {movie.original_language}
                                    </p>
                                    <p className="movie__quick-stats movie__quick-stats--release-date">
                                        <span className="movie__stat--title">Release:</span> {movie.release_date ? movie.release_date : 'NA'}
                                    </p>
                                    <p className="movie__quick-stats movie__quick-stats--popularity">
                                        <span className="movie__stat--title">Popularity:</span> {movie.popularity}
                                    </p>
                                </div>
                                <div className="movie__page--overview">
                                    <h4 className="movie__overview--title">Summary</h4>
                                    {movie.overview}
                                </div>
                            </div>
                        </div>
                        <div className="recommended">

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie;
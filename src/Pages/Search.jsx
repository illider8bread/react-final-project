import MovieComp from "../components/MovieComp";
import MovieSkeleton from "../components/MovieSkeleton";

function Search({ click, movieArray, loadingState }) { // Destructure props
    console.log("Made it to Search")
    console.log(movieArray)
    return (
        <>
            <header className="search__bar">
                <div className="search">
                    <input type="text" name="landing__search" id="landing__search--input" placeholder="Search movies now" />
                    <button className="landing__search--btn">
                        <svg className="mag-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                        </svg>
                    </button>
                </div>
            </header>
            <section id="movies">
                <div className="container">
                    <div className="row movies__row">
                        <div className="filter__search--wrapper">
                            <p>Filter Movies By:</p>
                            <select name="filter__search" id="filter__search" defaultValue="DEFAULT">
                                <option value="DEFAULT">(no filter)</option>
                                <option value="RELEASE_OLD_TO_NEW">Release Date: Old to New</option>
                                <option value="RELEASE_NEW_TO_OLD">Release Date: New to Old</option>
                                <option value="RATING_HIGH_TO_LOW">Rating: High to Low</option>
                                <option value="RATING_LOW_TO_HIGH">Rating: Low to High</option>
                            </select>
                        </div>
                        <div className="movies">
                            {loadingState ? (
                                // Render skeletons if loading
                                new Array(8).fill(0).map((_, index) => <MovieSkeleton key={index} />)
                            ) : (
                                // Render movies if not loading
                                <MovieComp movies={movieArray} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;


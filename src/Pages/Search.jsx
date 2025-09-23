import { useState, useEffect } from "react";
import MovieComp from "../components/MovieComp";
import MovieSkeleton from "../components/MovieSkeleton";


function Search({ click, movieArray, loadingState }) {
    console.log(movieArray);


    const [query, setQuery] = useState(""); //copied over from App.jsx. Sets the query for the search function
    const [filter, setFilter] = useState("DEFAULT");
    const [filteredMovies, setFilteredMovies] = useState(movieArray); // State for filtered movies

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            click(query);
        }
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        // Update filteredMovies whenever movieArray, query, or filter changes
        let movies = [...movieArray];

        // Filter by query
        if (query) {
            movies = movies.filter(movie => 
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Sort based on selected filter
        switch (filter) {
            case "RELEASE_OLD_TO_NEW":
                movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                break;
            case "RELEASE_NEW_TO_OLD":
                movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                break;
            case "RATING_HIGH_TO_LOW":
                movies.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
                break;
            case "RATING_LOW_TO_HIGH":
                movies.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average));
                break;
            default:
                break;
        }

        setFilteredMovies(movies); // Update the state with filtered and sorted movies
    }, [movieArray, query, filter]); // Dependencies for useEffect


    // const searchTerms = () => {
    //     setQuery(document.getElementById("search__input").value); //sets the value of query to what's in the text box. the value is encoded to URI by the search function
    // };

    // const enterSearch = (event) => { //runs every time a key is pressed down in the input text box
    //     if (event.key === "Enter") { //checks if the key pressed was the "enter" key
    //         searchTerms(); // if it is enter, it runs the searchTerms function and sets the value of query to the text in the textbox
    //     }
    // };//otherwise the function does nothing
   
    // const filterResults = (event) => {
    //     const filter = event.target.value || ""// sets value of filter to the value of the option selected, or if nothing selected, then blank string
    //     if (filter === "" || filter === 'DEFAULT'){//if filter is not engaged (aka equals default value or is empty)
    //         return filteredMovies//then do nothing and exit this function
    //     } else if (filter === "RELEASE_OLD_TO_NEW"){ // if the filter is __ do this
    //         console.log("release old to new")
    //             filteredMovies.sort(
    //             (a, b) => {
    //                 return parseInt(a.release_date) - parseInt(b.release_date) //converts release date to integer and year, then sorts
    //             })
    //     } else if (filter === "RELEASE_NEW_TO_OLD"){// if the filter is __ do this
    //         console.log("release new to old")
    //         filteredMovies.sort(
    //             (a, b) => {
    //                 return parseInt(b.release_date) - parseInt(a.release_date)//converts release date to integer and year, then sorts
    //             })
    //     }else if (filter === "RATING_HIGH_TO_LOW"){// if the filter is __ do this
    //         console.log("rating high to low")
    //         filteredMovies.sort(
    //             (a, b) => {
    //                 return parseFloat(b.popularity) - parseFloat(a.popularity) // converts popularity to decimal, then sorts
    //             })
    //     }else if (filter === "RATING_LOW_TO_HIGH"){// if the filter is __ do this
    //         console.log("rating low to high")
    //         filteredMovies.sort(
    //             (a, b) => {
    //                 return parseFloat(a.popularity) - parseFloat(b.popularity)// converts popularity to decimal, then sorts
    //             })
    //     }
    //     console.log(filteredMovies);
    //     return filteredMovies;
    // };

    useEffect(() => { // runs the search function (imported as a prop from App.jsx) every time the value of query changes
        click(query)
    },
        [query]);


    return (
        <>
            <header className="search__bar">
                <div className="search">
                    <input type="text"
                        name="landing__search"
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyPress}
                        /*enables the check for enter funtion, triggers the click useEffect */
                        id="search__input"
                        placeholder="Search movies now"
                        className="landing__search--input"
                    />
                    <button
                        className="landing__search--btn"
                        onClick={() => click(query)}
                    /*enables the value of query to be updated. triggers the click useEffect */
                    >
                        <svg className="mag-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 
                            533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 
                            272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                        </svg>
                    </button>
                </div>
            </header>
            <section id="movies">
                <div className="container">
                    <div className="row movies__row">
                        <div className="filter__search--wrapper">
                            <p>Filter Movies By:</p>
                            <select
                                onChange={handleFilterChange}
                                name="filter__search"
                                id="filter__search"
                                defaultValue="DEFAULT">
                                <option value="DEFAULT">
                                    (no filter)
                                </option>
                                <option value="RELEASE_OLD_TO_NEW">
                                    Release Year: Old to New
                                </option>
                                <option value="RELEASE_NEW_TO_OLD">
                                    Release Year: New to Old
                                </option>
                                <option value="RATING_HIGH_TO_LOW">
                                    Rating: High to Low
                                </option>
                                <option value="RATING_LOW_TO_HIGH">
                                    Rating: Low to High
                                </option>
                            </select>
                        </div>
                        <div className="movies">
                            {loadingState ? ( //is loading state true?
                                // Render skeletons if true
                                new Array(8).fill(0).map((_, index) => <MovieSkeleton key={index} />)
                            ) : (
                                // Render movies if false
                                <MovieComp movies={filteredMovies} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;


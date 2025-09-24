// adult:   False
// backdrop_path:	null
// id:	1546066
// original_language:	"en"
// original_title:	"THREEFUTURES"
// overview:	"An electric atmosphere. A dramatic scenario. An historical moment in MotoGP™, the pinnacle of motorcycle racing. May 2025. On the starting grid of the French MotoGP™ Grand Prix, Johann Zarco doesn’t seem ready to end France’s 71-year wait for a home victory in the first class of motorcycle racing. After a crazy race week gathering more than 300.000 fans at Le Mans circuit, an all-time attendance record for a MotoGP™ event, he starts only 11th. But as the riders have to control their machine at more than 190 miles per hour, the rain is beginning to fall… and it may change everything."
// popularity:	0.0214
// poster_path:	"/wBOobzTXiE3KKuZmttT1V7SJwze.jpg"
// release_date:	"2036-07-18"
// title:	"THREEFUTURES"
// video:	false
// vote_average:	0.0JS:0
// vote_count:	0

const Movie = () => {
    return (
        <>
            <section id="display">
                <div className="container">
                    <div className="row">
                        <div className="selected__movie">
                            <div className="movie__img--wrapper">
                                <img src="https://image.tmdb.org/t/p/original/wBOobzTXiE3KKuZmttT1V7SJwze.jpg" alt="" className="movie__img" />
                            </div>
                            <div className="movie__page--description">
                                <h2 className="movie__page--title">
                                    THREEFUTURES
                                </h2>
                                <div className="movie__page--quick-stats">
                                    <p className="movie__quick-stats movie__quick-stats--language">
                                        <span className="movie__stat--title">Language:</span> EN
                                    </p>
                                    <p className="movie__quick-stats movie__quick-stats--release-date">
                                        <span className="movie__stat--title">Release:</span> 2036-07-18
                                    </p>
                                    <p className="movie__quick-stats movie__quick-stats--popularity">
                                        <span className="movie__stat--title">Popularity:</span> 0.0214
                                    </p>
                                </div>
                                <div className="movie__page--overview">
                                    <h4 className="movie__overview--title">Summary</h4>
                                    An electric atmosphere. A dramatic scenario. An historical moment in MotoGP™, the pinnacle of motorcycle racing. May 2025. On the starting grid of the French MotoGP™ Grand Prix, Johann Zarco doesn’t seem ready to end France’s 71-year wait for a home victory in the first class of motorcycle racing. After a crazy race week gathering more than 300.000 fans at Le Mans circuit, an all-time attendance record for a MotoGP™ event, he starts only 11th. But as the riders have to control their machine at more than 190 miles per hour, the rain is beginning to fall… and it may change everything.
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
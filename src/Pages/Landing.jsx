import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate(); // Correctly using the hook inside the component
    function LandingSearch() {
        console.log("Landing Search");
        navigate('/search');
    }
    return (
        <header className="landing__page">
            <div className="container">
                <div className="row">
                    <section className="landing">
                        <div className="landing__title--wrapper">
                            <h1 className="landing__title">
                                browse an extensive movie database
                            </h1>
                            <h4 className="landing__subtitle">
                                Filled with every movie you can think of and more!
                            </h4>
                        </div>
                        <div className="landing__search--wrapper">
                            <input type="text" name="landing__search" id="landing__search--input" className="landing__search--input" placeholder="Search movies now" />
                            <button className="landing__search--btn" onClick={LandingSearch()}>
                                <svg className="mag-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default Landing;
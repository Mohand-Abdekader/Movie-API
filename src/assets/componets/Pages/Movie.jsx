import { useEffect, useState } from "react";
import { getMovie } from "../../Service/MovieService";
import { Link } from "react-router-dom";

function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovie()
            .then(res => {
                if (res && res.data && res.data.results) {
                    setMovies(res.data.results);
                } else {
                    console.log("Unexpected response structure:", res);
                }
            })
            .catch(err => console.log(err));
    }, [movies]);

    return (
        <>
            {console.log(movies)}
            <header className="container bg-dark rounded-2 py-4 text-center text-white w-50 mx-auto my-5">
                <h2>All Movies</h2>
            </header>
            <section className="container mx-auto py-5 row">
                {
                    movies.map((movie) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={movie.id}>
                            <div className="card" style={{ width: "22rem" }}>
                                <img src={movie.poster_path? `https:image.tmdb.org/t/p/w500${movie.poster_path}`:"https://www.reelviews.net/resources/img/default_poster.jpg" } className="card-img-top" alt={movie.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview}</p>
                                    <Link to={`/show/${movie.id}`} className="btn btn-primary">Go to Source</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    );
}

export default Movie;

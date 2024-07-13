import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showMovie } from "../../Service/MovieService";
import { Link } from "react-router-dom";

function Show() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
        showMovie(id)
            .then(res => {
                if (res && res.data) {
                    setMovie(res.data);
                } else {
                    console.log("Unexpected response structure:", res);
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <header className="container bg-dark rounded-2 py-4 text-center text-white w-50 mx-auto my-5">
                <h2>{movie.original_title}</h2>
            </header>

            <section className="container shadow py-5 text-center bg-light w-50 mx-auto my-5 text-dark">
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" alt={movie.title} />
                <hr />
                <p className=" text-lg-start">{movie.overview}</p>
                <div className="alert alert-info">
                    Movie Rate: {movie.vote_average}
                    {movie.adult ? " (Adult)" : ""}
                </div>
                <Link to="/" className="btn btn-dark my-3">Go back to movies</Link>
            </section>
        </>
    );
}

export default Show;

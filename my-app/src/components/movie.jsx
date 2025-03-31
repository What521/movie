import "./css/movie.css";
import {Outlet, Link} from "react-router-dom";

function Movie(props) {
    return (
        <section className="movie">
            <Link to={props.linkName}><h3>{props.name}</h3></Link>     
            <img src={props.image} />
            <p>{props.cast}</p>
            <p>{props.year}</p>
            <p>{props.rating}</p>
        </section>
    );
}

export default Movie;
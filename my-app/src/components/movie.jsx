import "./css/movie.css";

function Movie(props) {

    return (
        <section className="movie"  onClick={props.onClick} 
        style={{ cursor: props.onClick ? 'pointer' : 'default' }}>
            <h3>{props.name}</h3>    
            <img src={props.image} />
            <p>{props.genre}</p>
            <p>{props.cast}</p>
            <p>{props.year}</p>
            <p>{props.rating}</p>
        </section>
    );
}

export default Movie;
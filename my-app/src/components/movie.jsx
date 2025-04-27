import "./css/movie.css";
import React, {useState, useEffect} from "react";
import EditMovie from "../components/EditMovie.jsx";
import DeleteMovie from "../components/DeleteMovie.jsx";

function Movie(props) {

    const [movieDesc, setMovieDesc] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showMovieDesc, setShowMovieDesc] = useState(true);
    
    const openEditDialog = () => {
        setShowEditDialog(true);
      };
    
      const closeEditDialog = () => {
        setShowEditDialog(false);
      };
    
      const openDeleteDialog = () => {
        setShowDeleteDialog(true);
      };
    
      const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
      };
    
      const hideMovieDesc = () => {
        setShowMovieDesc(false);
      };
    
      const editMovieDesc = (movie) => {
        setMovieDesc(movie);
      };

    return (
        <>
        <section className="movie"  onClick={props.onClick} 
        style={{ cursor: props.onClick ? 'pointer' : 'default' }}>
        {showMovieDesc?(
        <div>
            {showDeleteDialog?(
              <DeleteMovie
              title={props.name}
              _id={props._id}
              closeDeleteDialog = {closeDeleteDialog}
              hideMovieDesc = {hideMovieDesc}
            />
            ):("")}

            {showEditDialog?(
               <EditMovie
               _id={props._id}
               title={props.name}
               cast={props.cast}
               year={props.year}
               rating={props.rating}
               closeEditDialog = {closeEditDialog}
               editMovieDesc = {editMovieDesc}
             />
            ):("")}
           

          <section className="movieDesc columns">
    
            <section className="info">
              <header className="columns">
                <h3>{props.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog} >
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>
            
              <p> Cast: {props.cast}</p>
              <p> Year: {props.year}</p>
              <p> Rating: {props.rating}</p>
            </section>
          </section>
        </div>
      ):("")}
      </section>
        </>
    );
}

export default Movie;
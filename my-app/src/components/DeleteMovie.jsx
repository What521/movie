import "./css/Modal.css";
import "./css/DeleteMovie.css";
import React, { useState } from "react";

const DeleteMovie = (props) => {

  const [result, setResult] = useState("");

  const deleteMovie = async() => {
    const response = await fetch(`https://movie-server-t54e.onrender.com/api/movies/${props._id}`,{
      method:"DELETE"
    });

    if(response.status === 200){
      setResult("Movie deleted successfully");
      props.closeDeleteDialog();
      props.hideMovieDesc();
    } else {
      setResult("error deleting the movie");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick = {props.closeDeleteDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.title}</h3>
            <section>
              <button onClick = {props.closeDeleteDialog}>No</button>            
              <button onClick={deleteMovie}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
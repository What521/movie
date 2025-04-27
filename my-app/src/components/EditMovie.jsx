import "./css/Modal.css";
import "./css/EditMovie.css";
import React, { useState } from "react";

const EditMovie = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
};

  const onSubmit = async(event) => { 
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch(`https://movie-server-t54e.onrender.com/api/movies/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Movie editted successfully!");
      event.target.reset();
      props.closeEditDialog();
      props.editMovieDesc(await response.json());
    }
    else {
      setResult("can't edit movie");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeEditDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="title">Movie Name:</label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={props.title}
                required
              />
            </p>

            <p>
              <label htmlFor="cast">Cast:</label>
              <input
                type="text"
                id="cast"
                name="cast"
                defaultValue={props.cast}
                required
              />
            </p>

<p>
              <label htmlFor="year">Year:</label>
              <input
                type="number"
                id="year"
                name="year"
                defaultValue={props.year}
                required
              />
            </p>
            <p>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                id="rating"
                name="rating"
                defaultValue={props.rating}
                required
              />
            </p>

            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
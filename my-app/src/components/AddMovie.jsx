import "./css/AddMovie.css";
import "./css/Modal.css";
import React, {useState} from "react";

const AddMovie = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); 
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("https://movie-server-t54e.onrender.com/api/movies", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Movie added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateMovieDesc(await response.json());
        } else {
            setResult("Error adding movie");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Movie</h3>

                        <p>
                            <label htmlFor="title">Movie Name:</label>
                            <input type="text" id="name" name="title" required></input>
                        </p>

                        <p>
                            <label htmlFor="cast">Cast:</label>
                            <input type="text" id="cast" name="cast" required></input>
                        </p>

                        <p>
                            <label htmlFor="year">Year:</label>
                            <input type="number" id="year" name="year" min="1000" required></input>
                        </p>

                        <p>
                            <label htmlFor="rating">Rating:</label>
                            <input type="text" id="rating" name="rating" required></input>
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

export default AddMovie;
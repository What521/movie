import './css/Genre.css';
import Movie from '../components/movie.jsx';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Pop from '../components/pop.jsx';
import AddMovie from '../components/AddMovie.jsx';

function Genre () {

  const [props, setProps] = useState([]); 
  
     useEffect (() => {
      (async () => {
        const response = await axios.get(
          "https://movie-server-t54e.onrender.com/api/movies"
        );
       setProps(response.data);
      })();
     },[]);

     const [selectedMovie, setSelectedMovie] = useState(null);

     const handleMovieClick = (movie) => {
       setSelectedMovie(movie);
     };
   
     const closeModal = () => {
       setSelectedMovie(null);
     };

     const [movies, setMovies] = useState([]);
     const [showAddDialog, setShowAddDialog] = useState(false);
 
     useEffect(()=>{
         
         (async () => {
             const response = await axios.get( "https://movie-server-t54e.onrender.com/api/movies");
             setMovies(response.data);
         })();
 
     },[]);

     const openAddDialog = () => {
      setShowAddDialog(true);
     }

  const closeAddDialog = () => {
      setShowAddDialog(false);
  }

  const updateMovieDesc = (movieDesc) => {
      setMovies((movies)=>[...movies, movieDesc]);
  };

    return(
      <>
         <h5>Add a movie description</h5>
                <br/><br/>
        
                <button id="add-movie" onClick={openAddDialog}>+</button>

         {showAddDialog?(<AddMovie 
                    closeAddDialog={closeAddDialog} 
                    updateMovieDesc={updateMovieDesc}
                    /> ): ("")}

        <div id="genres">
        {props.map((prop) => (
          <Movie
          key={prop._id}
          _id={prop._id}
          onClick={() => handleMovieClick(prop)}
          name={prop.title}
          cast={prop.cast}
          year={prop.year}
          rating={prop.rating}
          />
        ))}
        </div>
    </>
    );
};

export default Genre;
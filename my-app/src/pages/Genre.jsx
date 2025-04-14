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
         <h5>Search movie by genre</h5>
                <br/><br/>
        
                <button id="add-movie" onClick={openAddDialog}>+</button>

         {showAddDialog?(<AddMovie 
                    closeAddDialog={closeAddDialog} 
                    updateMovieDesc={updateMovieDesc}
                    /> ): ("")}

        <div id="genres">
        {props.map((prop) => (
        
          <Movie
          key={prop.be_id}
          onClick={() => handleMovieClick(prop)}
          genre={prop.Genre}
          name={prop.title}
          image={prop.image1}
          cast={prop.cast}
          year={prop.year}
          rating={prop.rating}
          />
        ))}
        </div>

{selectedMovie && (
        <Pop
          className="opening"
          onClose={closeModal}
          name={selectedMovie.title}
          desc={selectedMovie.desc}
          image1={`${process.env.PUBLIC_URL}/${selectedMovie.image1}`} 
          image2={`${process.env.PUBLIC_URL}/${selectedMovie.image2}`}
        />
      )} 
      </>
    );
};

export default Genre;
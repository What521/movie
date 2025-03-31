import './css/Genre.css';
import Movie from '../components/movie.jsx';

function Genre () {
    return(
      <>
         <h1>Search movie by genre</h1>
                <br/><br/>
                <div className="MG">
        <h1>Action:</h1>
        <div className="actionImg">
          <Movie
          name = "John Wick"
        image ="images/JWimg.jfif"
        cast = "Cast: Keanu Reeves, Adrianne Palicki"
        year = "Year: 2014"
        rating = "Rating: 7.4/10 IMDb"/>

          <Movie
           name = "The Fall Guy"
           image="images/FGimg.jfif"
           cast= "Cast: Ryan Gosling, Emily Blunt"
           year= "Year: 2024"
           rating= "Rating: 6.8/10 IMDb"  
          />

          <Movie
          name="Flight Risk"
        image="images/FR.jfif"
        cast= "Cast: Mark Wahlberg, Michelle Dockery"
        year= "Year: 2025"
        rating= "Rating: 5.3/10 IMDb"  />       

        </div>
        <br/><br/>

        <h1>Comedy: </h1>
        <div className="comedyImg">
        <Movie
       name ="Free Guy"
        image="images/FreeG.jfif"
        cast= "Cast: Ryan Reynolds, Jodie Comer"
        year= "Year: 2021"
        rating= "Rating: 7.1/10 IMDb"   />

          <Movie
         name="White Chicks"
        image="images/WC.jfif"
        cast= "Cast: Shawn Wayans, Marlon Wayans"
        year="Year: 2004"
        rating= "Rating: 5.8/10 IMDb"  /> 
        
          <Movie
           name="Fly me to the moon"
           image="images/flmm.jfif"
           cast= "Cast: Channing Tatum, Scarlett Johanessen"
           year= "Year: 2024"
           rating= "Rating: 6.6/10 IMDb"  /> 
        </div>
<br/><br/>

<h1>Romance:</h1>
<div className="romanceImg">
<Movie
name="La La Land"
        image="images/LLL.jfif"
        cast = "Cast: Ryan Gosling, Emma Stone"
        year = "Year: 2016"
         rating = "Rating: 8/10 IMDb"/>

          <Movie
            name="The Idea of You"
            image ="images/idea.jfif"
            cast = "Cast: Anne Hathaway, Nicholas Galitzine"
            year = "Year: 2024"
            rating = "Rating: 6.3/10 IMDb"/> 

          <Movie
           name="Anyone But You"
           image="images/anyone.jfif"
           cast= "Cast: Sydney Sweeney, Glen Powell"
           year= "Year: 2023"
           rating= "Rating: 6.1/10 IMDb"/>   
</div>
                </div>
      </>
    );
};

export default Genre;
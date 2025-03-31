import './css/Home.css';
import './js/Home.js';
import Movie from '../components/movie.jsx';
import Popup from '../components/popup.jsx';

function App() {
  return (
    <>

<h2>Home</h2>

<h3>Top Recommended movies:</h3>

<ul className="recommended">

  <section className="RND">
<Movie
        name = "Red Notice"
        image ={`${process.env.PUBLIC_URL}/images/RN.jfif`}
        cast = " Dwayne Johnson, Ryan Reynolds"
        year = "Year: 2021"
        rating = "Rating: 6.3/10 IMDb"/>
 </section>

          <Movie
           name = "Puss in the boots"
           image={`${process.env.PUBLIC_URL}/images/PB.jfif`}
           cast= "Cast: Antonio Banderas, Salma Hayek"
           year= "Year: 2011"
           rating= "Rating: 6.6/10 IMDb"  
          />
</ul>

    <h3>Now streaming:</h3>
    <ul className="nowStreaming">
    <Movie
          name = "A Knight's War"
        image ={`${process.env.PUBLIC_URL}/images/KW.jfif`}
        cast = "Cast: Jeremy Ninaber, Kristen Kasteri"
        year = "Year: 2025"
        rating = "Rating: 7.1/10 IMDb"/>

          <Movie
           name = "Dark Nuns"
           image={`${process.env.PUBLIC_URL}/images/DN.jfif`}
           cast= "Cast: Moon Woo-jin, Lee Jin-wook"
           year= "Year: 2025"
           rating= "Rating: 5.8/10 IMDb"  
          />
    </ul>


    <div className="RP">
<div className="randomPosters">
    <img src={`${process.env.PUBLIC_URL}/images/DW.png`} height="210" width="300"/>
    <img src={`${process.env.PUBLIC_URL}/images/IW.jfif`} height="210" width="300"/>
    <img src={`${process.env.PUBLIC_URL}/images/CA.jfif`} height="210" width="300"/>
</div>

<div className="randomPosters2">
    <img src={`${process.env.PUBLIC_URL}/images/DS.jfif`} height="300" width="350"/>
    <img src={`${process.env.PUBLIC_URL}/images/BTM.jfif`} height="300" width="350"/>
</div>
  
  </div>

<section className="RN">
  <Popup
  title="Red Notice"/>
</section>  

    
    </>

  );
}

export default App;
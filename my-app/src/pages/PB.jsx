import MoviePage from '../components/moviePage';
import './css/desc.css';

function PB (){
    return(
       <section>
        <MoviePage
        name = "Puss in the boots"
        desc = "Long before meeting Shrek, Puss in Boots (Chris Miller) -- just named a hero for saving a woman from a charging bull, is run out of town on suspicion of bank robbery, even though the real villain is Puss' friend, Humpty Dumpty (Joe Aguilar). Though there is still animosity between them, Puss and Humpty reunite to steal a goose that lays golden eggs. Joining them for the adventure of nine lifetimes is notorious cat burglar, Kitty Softpaws (Tom Wheeler)."
        image1 = "images/PB.jfif"
        image2 = "images/PB2.jfif"
        />
       </section>
    );
};

export default PB;
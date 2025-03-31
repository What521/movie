import MoviePage from '../components/moviePage';
import './css/desc.css';

function FreeG (){
    return(
       <section>
        <MoviePage
        name = "Free Guy"
        image1 = "images/FreeG.jfif"
        image2 = "images/freeG2.jfif"
        desc = "   When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him."/>
       </section>
    );
};

export default FreeG;
import MoviePage from '../components/moviePage';
import './css/desc.css';

function FLMM (){
    return(
       <section>
        <MoviePage
        name = "Fly me to the moon"
        image1 = "images/flmm.jfif"
        image2 = "images/flmm2.jfif"
        desc = "   A marketing specialist, Kelly Jones, is tasked with staging a fake moon landing as a backup plan in case the real Apollo 11 mission fails, leading to a romantic comedy-drama set against the backdrop of the space race."/>
       </section>
    );
};

export default FLMM;
import MoviePage from '../components/moviePage';
import './css/desc.css';

function JW (){
    return(
       <section>
        <MoviePage
        name = "John Wick"
        image1 = "images/JWimg.jfif"
        image2 = "images/JW2.jfif"
        desc = "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head."/>
       </section>
    );
};

export default JW;
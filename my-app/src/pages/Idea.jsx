import MoviePage from '../components/moviePage';
import './css/desc.css';

function Idea (){
    return(
       <section>
        <MoviePage
        name = "La La Land"
        image1 = "images/idea.jfif"
        image2 = "images/idea2.jfif"
        desc = "A 40-year-old single mum begins an unexpected romance with a 24-year-old boy band singer."/>
       </section>
    );
};

export default Idea;
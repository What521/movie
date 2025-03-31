import MoviePage from '../components/moviePage';
import './css/desc.css';

function FR (){
    return(
       <section>
        <MoviePage
        name = "Flight Risk"
        image1 = "images/FR.jfif"
        image2 = "images/fr2.jfif"
        desc = "  A U.S. marshal boards a small plane to transfer a government witness to New York. As they cross the Alaskan wilderness, tensions start to rise as not everyone on the flight is who they appear to be."/>
       </section>
    );
};

export default FR;
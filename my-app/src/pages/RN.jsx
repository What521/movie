import MoviePage from '../components/moviePage';
import './css/desc.css';

function RN (){
    return(
       <section>
        <MoviePage
        name = "Red Notice"
        desc = "John Hartley is an FBI profiler who investigates the theft of one of the eggs on display at the Museo Nazionale di Castel Sant'Angelo in Rome, along with Interpol agent Urvashi Das. Having stolen the egg, globally wanted art thief Nolan Booth manages to escape but finds Hartley and the Interpol at his home in Bali. They arrest Booth, but not before Booth's main rival Sarah 'The Bishop' Black steals the egg and frames Hartley."
        image1 = "images/RN.jfif"
        image2 = "images/RN2.jfif"
        />
       </section>
    );
};

export default RN;
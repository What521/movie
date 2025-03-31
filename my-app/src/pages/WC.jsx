import MoviePage from '../components/moviePage';
import './css/desc.css';

function WC (){
    return(
       <section>
        <MoviePage
        name = "White Chicks"
        image1 = "images/WC.jfif"
        image2 = "images/wc2.jfif"
        desc = "  Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland (Shawn Wayans), accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites (Anne Dudek, Rochelle Aytes) to the Hamptons, where they're going to be used as bait for a kidnapper. But when the girlsrealize the FBI's plan, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from African-American men into a pair of blonde, white women."/>
       </section>
    );
};

export default WC;
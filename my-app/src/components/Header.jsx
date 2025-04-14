import './css/Header.css';
import Navigation from './Navigation';

function Header() {
    return(
        <header>
            <img src={`${process.env.PUBLIC_URL}/images/LogoM.jfif`}/>
            <h4>Mayback movies</h4>
            <Navigation />
        </header>
    );
};

export default Header;
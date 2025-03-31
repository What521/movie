import './css/Header.css';
import Navigation from './Navigation';

function Header() {
    return(
        <header>
            <img src={`${process.env.PUBLIC_URL}/images/LogoM.jfif`}/>
            <h1>Mayback movies</h1>
            <Navigation />
        </header>
    );
};

export default Header;
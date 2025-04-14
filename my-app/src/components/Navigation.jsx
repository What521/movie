import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';
import {useState} from "react";


function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="main-nav">
            <div id="toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <ul className={menuOpen?"":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/genre">Search by genre</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
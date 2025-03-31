import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';


function Navigation() {
    return (
        <nav className="main-nav">
            <ul>
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
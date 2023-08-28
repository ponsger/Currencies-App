import '../css/Navbar/navbar.css'
import '../css/Navbar/navbar-ul.css'
import '../css/Navbar/navbar-ul-li.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <Link to={"/"} className='navbar-ul__li'>Home</Link>
                <Link to={"/exchange"} className='navbar-ul__li'>Check Prices</Link>
                <Link to={"/graphics"} className='navbar-ul__li'>Graphics</Link>
                <Link to={"/about"} className='navbar-ul__li'>About</Link>
                
            </ul>

        </nav>);
}

export default Navbar;
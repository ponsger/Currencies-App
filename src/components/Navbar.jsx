import '../css/Navbar/navbar.css'
import '../css/Navbar/navbar-ul.css'
import '../css/Navbar/navbar-ul-li.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='navbar-ul__li'>Home</li>
                <li className='navbar-ul__li'>About</li>
            </ul>

        </nav>);
}

export default Navbar;
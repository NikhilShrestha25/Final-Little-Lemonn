import {useState} from 'react';
import logo from './Logo .svg';
import {Link} from 'react-router-dom';
function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className={`navbar`}>

            <a href= '/'>  
                <img src ={logo} alt='logo'/>
            </a>
            {/* mobile navbar */}
            <div className="menu-icon" onClick={toggleMenu} >
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav itmes */}
            
                <ul className={`nav-links ${menuOpen ? "visible" : "" }`}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/menuu">Menu</a>
                    </li>
                    <li>
                        <a href="/booking">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            
        </nav>
    );
};

export default Nav;
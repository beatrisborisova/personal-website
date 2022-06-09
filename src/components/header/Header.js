import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <div className="header">
            <nav className="nav-content">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='projects'>Projects</NavLink>
                <NavLink to='about'>Contacts</NavLink>
            </nav>
            <div className='menu'>Menu</div>
            <div className="logo-image-wrapper">
                <img src="front-end-developer.png" alt='front-end-developer-logo' />
            </div>
        </div>
    )
}

export default Header;
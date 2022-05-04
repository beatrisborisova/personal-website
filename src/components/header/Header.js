import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <div className="header">
            <aside className="navPanel">
                <div className='menu'>
                    Menu
                </div>
                <nav className="toggleNav">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='projects'>Projects</NavLink>
                    <NavLink to='about'>Contacts</NavLink>
                </nav>

            </aside>
            <div className="logo-image-wrapper">
                <img src="front-end-developer.png" alt='front-end-developer-logo'/>
            </div>

        </div>
    )
}

export default Header;
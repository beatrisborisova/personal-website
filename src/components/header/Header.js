import { Link } from 'react-router-dom';
import './Header.css'

function Header() {

    return (
        <div className="header">
            <aside className="navPanel">
                <div className='menu'>
                    Menu
                </div>
                <nav className="toggleNav">
                    <Link to='/'>Home</Link>
                    <Link to='projects'>Projects</Link>
                    <Link to='about'>About</Link>
                </nav>

            </aside>
            <div className="logo-image-wrapper">
                <img src="front-end-developer.png" alt='front-end-developer-logo'/>
            </div>

        </div>
    )
}

export default Header;
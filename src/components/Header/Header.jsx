import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.scss'

function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                <img src={logo} alt="Kasa" />
            </NavLink>
            <nav className="header__nav">
                <NavLink to="/" end className="header__link">
                    Accueil
                </NavLink>
                <NavLink to="/a-propos" className="header__link">
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header

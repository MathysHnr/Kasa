import logo from '../../assets/logo-footer.png'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Kasa" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer

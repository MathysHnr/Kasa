import { Link } from 'react-router-dom'
import errorImage from '../../assets/error.png'
import './Error.scss'

function Error() {
    return (
        <div className="error">
            <img className="error__image" src={errorImage} alt="404" />
            <p className="error__message">
                Oups! La page que vous demandez n&apos;existe pas.
            </p>
            <Link className="error__link" to="/">
                Retourner sur la page d&apos;accueil
            </Link>
        </div>
    )
}

export default Error

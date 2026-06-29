import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ id, title, cover }) {
    return (
        <Link className="card" to={`/logement/${id}`}>
            <img className="card__image" src={cover} alt={title} />
            <h3 className="card__title">{title}</h3>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card

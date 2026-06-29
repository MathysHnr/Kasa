import PropTypes from 'prop-types'
import './Host.scss'

function Host({ name, picture }) {
    return (
        <div className="host">
            <span className="host__name">{name}</span>
            <img className="host__picture" src={picture} alt={name} />
        </div>
    )
}

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default Host

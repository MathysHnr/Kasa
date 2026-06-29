import PropTypes from 'prop-types'
import './Tag.scss'

function Tag({ label }) {
    return <li className="tag">{label}</li>
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Tag

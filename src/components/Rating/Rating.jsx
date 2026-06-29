import PropTypes from 'prop-types'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'
import './Rating.scss'

const MAX_RATING = 5

function Rating({ rating }) {
    const score = Number(rating)

    return (
        <div className="rating" aria-label={`${score} étoiles sur ${MAX_RATING}`}>
            {Array.from({ length: MAX_RATING }, (_, index) => (
                <img
                    key={index}
                    className="rating__star"
                    src={index < score ? starActive : starInactive}
                    alt=""
                />
            ))}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Rating

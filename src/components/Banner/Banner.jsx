import PropTypes from 'prop-types'
import './Banner.scss'

function Banner({ image, alt, children }) {
    return (
        <section className="banner">
            <img className="banner__image" src={image} alt={alt} />
            {children && <h1 className="banner__title">{children}</h1>}
        </section>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    children: PropTypes.node,
}

Banner.defaultProps = {
    alt: '',
    children: null,
}

export default Banner

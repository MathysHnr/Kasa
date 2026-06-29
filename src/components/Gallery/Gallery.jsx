import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Gallery.scss'

function Gallery({ items }) {
    return (
        <section className="gallery">
            {items.map(({ id, title, cover }) => (
                <Card key={id} id={id} title={title} cover={cover} />
            ))}
        </section>
    )
}

Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Gallery

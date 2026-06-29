import { useState } from 'react'
import PropTypes from 'prop-types'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'
import './Slideshow.scss'

function Slideshow({ pictures, title }) {
    const [current, setCurrent] = useState(0)
    const total = pictures.length
    const hasControls = total > 1

    const goToPrevious = () =>
        setCurrent((index) => (index - 1 + total) % total)

    const goToNext = () => setCurrent((index) => (index + 1) % total)

    return (
        <section className="slideshow">
            <img
                className="slideshow__image"
                src={pictures[current]}
                alt={`${title} - ${current + 1}`}
            />

            {hasControls && (
                <>
                    <button
                        type="button"
                        className="slideshow__arrow slideshow__arrow--left"
                        onClick={goToPrevious}
                        aria-label="Image précédente"
                    >
                        <img src={arrowLeft} alt="" />
                    </button>
                    <button
                        type="button"
                        className="slideshow__arrow slideshow__arrow--right"
                        onClick={goToNext}
                        aria-label="Image suivante"
                    >
                        <img src={arrowRight} alt="" />
                    </button>
                    <span className="slideshow__counter">
                        {current + 1}/{total}
                    </span>
                </>
            )}
        </section>
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
}

export default Slideshow

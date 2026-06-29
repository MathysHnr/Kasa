import { useState } from 'react'
import PropTypes from 'prop-types'
import chevron from '../../assets/chevron.png'
import './Collapse.scss'

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen((open) => !open)

    return (
        <div className="collapse">
            <button
                type="button"
                className="collapse__header"
                onClick={toggle}
                aria-expanded={isOpen}
            >
                <span className="collapse__title">{title}</span>
                <img
                    className={`collapse__chevron${
                        isOpen ? ' collapse__chevron--open' : ''
                    }`}
                    src={chevron}
                    alt=""
                />
            </button>
            <div
                className={`collapse__content${
                    isOpen ? ' collapse__content--open' : ''
                }`}
            >
                <div className="collapse__inner">{children}</div>
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Collapse

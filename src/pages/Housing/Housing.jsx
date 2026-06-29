import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Rating from '../../components/Rating/Rating'
import Tag from '../../components/Tag/Tag'
import Host from '../../components/Host/Host'
import logements from '../../data/logements.json'
import './Housing.scss'

function Housing() {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)

    // Id inexistant : redirection vers la page d'erreur
    if (!logement) {
        return <Navigate to="/404" replace />
    }

    const { title, location, pictures, tags, host, rating, description, equipments } =
        logement

    return (
        <article className="housing">
            <Slideshow pictures={pictures} title={title} />

            <header className="housing__header">
                <div className="housing__intro">
                    <h1 className="housing__title">{title}</h1>
                    <p className="housing__location">{location}</p>
                    <ul className="housing__tags">
                        {tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </ul>
                </div>

                <div className="housing__aside">
                    <Host name={host.name} picture={host.picture} />
                    <Rating rating={rating} />
                </div>
            </header>

            <section className="housing__details">
                <Collapse title="Description">{description}</Collapse>
                <Collapse title="Équipements">
                    <ul className="housing__equipments">
                        {equipments.map((equipment) => (
                            <li key={equipment}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </section>
        </article>
    )
}

export default Housing

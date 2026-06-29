import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import bannerImage from '../../assets/banner-home.png'
import logements from '../../data/logements.json'

function Home() {
    return (
        <div className="home">
            <Banner image={bannerImage} alt="Paysage de bord de mer">
                Chez vous, partout et ailleurs
            </Banner>
            <Gallery items={logements} />
        </div>
    )
}

export default Home

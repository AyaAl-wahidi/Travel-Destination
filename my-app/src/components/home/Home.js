import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';

const tourData = require('../../data/db.json');

function Home() {
    return (
        <>
            <Header />
            <div>
                {tourData.map((element) => (
                    <Tours city_id={element.id} city_name={element.name} city_image={element.image} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Home;
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TourDetails.css';
const tourData = require('../../data/db.json');

function TourDetails() {
    const { id } = useParams();

    const data = tourData.find(item => item.id === id);
    const { name, info, image, price } = data;
    const [cityDesc, setCityDesc] = useState(false);

    const editDescription = (text, maxLength) => {
        const lastSpaceIndex = text.lastIndexOf(' ', maxLength);
        return text.slice(0, lastSpaceIndex) + ' ...';
    }

    const seeMore = () => {
        setCityDesc(!cityDesc);
    }

    return (
        <>
            <Header />
            <div className="tour-details">
                <div className="card-container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Img variant="top" src={image} />
                            <Card.Text>
                                Price : {price}
                            </Card.Text>
                            <Card.Text>
                                Info : {cityDesc ? info : editDescription(info, 200)}
                            </Card.Text>
                            <Button variant="primary" onClick={seeMore} className="toggle-button">{cityDesc ? "See Less" : "See More"}</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TourDetails;

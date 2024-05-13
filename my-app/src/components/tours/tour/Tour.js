import { Link } from 'react-router-dom';
import './Tour.css'

function Tour(props) {

    return (
        <>
            <div className="tour">
                <Link to={`/city/${props.id}`}>
                    <h3>{props.city_name}</h3>
                    <img src={props.city_image} alt={props.city_name} />
                </Link>
            </div>
        </>
    )
}

export default Tour;
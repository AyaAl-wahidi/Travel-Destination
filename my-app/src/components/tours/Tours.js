import './Tours.css';

function Tours(props) {
  return (
      <div className="tour">
      <h3>{props.city_name}</h3>
      <img src={props.city_image} alt={props.city_name}/>
      </div>
      );
}

export default Tours;
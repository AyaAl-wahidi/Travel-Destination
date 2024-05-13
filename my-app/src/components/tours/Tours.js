import './Tours.css';
import Tour from '../tours/tour/Tour'
const tourData = require('../../data/db.json');

function Tours() {
  return (
    <>
      <div>
        {tourData.map((element) => (
          <Tour id={element.id} city_name={element.name} city_image={element.image} />
        ))}
      </div>
    </>
  );
}

export default Tours;
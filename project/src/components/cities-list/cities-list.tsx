import {CITIES} from '../../const';
import {CityItem} from '../city-item/city-item';

function CityList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} />
      ))}
    </ul>
  );
}

export {CityList};

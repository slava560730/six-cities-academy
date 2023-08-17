import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { Link } from 'react-router-dom';
// import cn from 'classnames';

type FavoritesProps = {
  city: string;
  selectedCity: string;
};

function CityItem({ city}: FavoritesProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li key={city} className="locations__item">
      <Link
        className = "locations__item-link tabs__item"
        to="#"
        onClick={() => {
          dispatch(changeCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export {CityItem};

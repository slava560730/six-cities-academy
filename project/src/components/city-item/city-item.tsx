import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-process/app-process';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type CityItemProps = {
  city: string;
  selectedCity: string;
};

function CityItem({ selectedCity, city}: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li key={city} className="locations__item">
      <Link
        className = {cn('locations__item-link tabs__item', {
          'tabs__item--active': city === selectedCity,
        })}
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

import {useAppDispatch, useAppSelector} from '../../hooks';
import { changeCity, sortOffersType } from '../../store/app-process/app-process';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import {SELECT_OPEN, SortType} from '../../const';
import { getCurrentCity } from '../../store/app-process/selectors';


type CityItemProps = {
  city: string;
};

function CityItem({city}: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getCurrentCity);

  return (
    <li key={city} className="locations__item">
      <Link
        className = {cn('locations__item-link tabs__item', {
          'tabs__item--active': city === selectedCity,
        })}
        to="#"
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          dispatch(changeCity(city));
          dispatch(
            sortOffersType({
              currentSortType: SortType.Popular,
              selectState: !SELECT_OPEN,
            })
          );
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export {CityItem};

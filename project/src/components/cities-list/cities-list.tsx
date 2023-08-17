import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fillOfferList } from '../../store/action';
import {CITIES} from '../../const';
import {CityItem} from '../city-item/city-item';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(fillOfferList(selectedCity));
  }, [selectedCity]);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} selectedCity={selectedCity} />
      ))}
    </ul>
  );
}

export {CityList};

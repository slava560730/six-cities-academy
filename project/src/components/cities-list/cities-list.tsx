import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fillOfferList } from '../../store/action';
import {CITIES} from '../../const';
import {CityItem} from '../city-item/city-item';

type CityListProps = {
  selectedCity: string;
};

function CityList({ selectedCity }: CityListProps): JSX.Element {
  const { offers } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOfferList(offers, selectedCity));
  }, [selectedCity, offers,]);

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityItem key={city} city={city} selectedCity={selectedCity} />
      ))}
    </ul>
  );
}

export {CityList};

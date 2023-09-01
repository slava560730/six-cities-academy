import {Sort} from '../sort/sort';
import {OfferList} from '../offer-list/offer-list';
import {Map} from '../map/map';
import {classNamesMap, NULL_CITY_ID} from '../../const';
import {useAppSelector} from '../../hooks';
import {getCurrentCity, getSortedOffers} from '../../store/app-process/selectors';
import {useState} from 'react';


function CityPlaces (): JSX.Element {
  const offersCity = useAppSelector(getSortedOffers);
  const city = useAppSelector(getCurrentCity);
  const [selectedOffer, setSelectedOffer] = useState(NULL_CITY_ID);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCity.length} places to stay in {city}</b>
        <Sort/>
        <div className="cities__places-list places__list tabs__content">
          <OfferList setSelectedOffer={setSelectedOffer} />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map selectedOffer={selectedOffer} offers={offersCity} classNameMap={classNamesMap.Main}></Map>
        </section>
      </div>
    </div>
  );
}

export {CityPlaces};

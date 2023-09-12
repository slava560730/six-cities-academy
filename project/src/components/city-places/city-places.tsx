import {Sort} from '../sort/sort';
import {OfferList} from '../offer-list/offer-list';
import {Map} from '../map/map';
import {classNamesMap} from '../../const';
import {useAppSelector} from '../../hooks';
import {getCurrentCity, getSortedOffers} from '../../store/app-process/selectors';
import { MainEmptyPage } from '../../pages/main-empty/main-empty';

function CityPlaces (): JSX.Element {
  const offersCity = useAppSelector(getSortedOffers);
  const city = useAppSelector(getCurrentCity);

  return (
    <div className="cities">
    {offersCity.length !== 0 ? (
      <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCity.length} places to stay in {city}</b>
        <Sort/>
        <div className="cities__places-list places__list tabs__content">
          <OfferList />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={offersCity} classNameMap={classNamesMap.Main}></Map>
        </section>
      </div>
      </div>
    ) : (<MainEmptyPage />
    )}
  </div>
  );
}

export {CityPlaces};

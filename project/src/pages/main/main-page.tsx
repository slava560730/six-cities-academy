import { Header } from '../../components/header/header';
import { classNamesMap } from '../../const';
import {OfferList} from '../../components/offer-list/offer-list';
import {useState} from 'react';
import {Map} from '../../components/map/map';
import {CityList} from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import {Sort} from '../../components/sort/sort';

function MainPage (): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState(500);
  const city = useAppSelector((state) => state.city);
  const offersCity = useAppSelector((state) => state.offerCity);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={city}/>
          </section>
        </div>
        <div className="cities">
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
        </div>
      </main>
    </div>
  );
}

export {MainPage};

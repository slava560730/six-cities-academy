import { Header } from '../../components/header/header';
import {CityList} from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { MainEmptyPage } from '../main-empty/main-empty';
import { getCurrentCity, getSortedOffers } from '../../store/app-process/selectors';
import {CityPlaces} from '../../components/city-places/city-places';

function MainPage (): JSX.Element {
  const city = useAppSelector(getCurrentCity);
  const offersCity = useAppSelector(getSortedOffers);

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
          {offersCity.length !== 0 ? (
            <CityPlaces />
          ) : (<MainEmptyPage />
          )}
        </div>
      </main>
    </div>
  );
}

export {MainPage};

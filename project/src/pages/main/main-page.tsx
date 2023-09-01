import { Header } from '../../components/header/header';
import {CityList} from '../../components/cities-list/cities-list';
import {CityPlaces} from '../../components/city-places/city-places';

function MainPage (): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList />
          </section>
        </div>
        <CityPlaces />
      </main>
    </div>
  );
}

export {MainPage};

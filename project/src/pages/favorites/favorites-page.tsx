import {Link} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {Helmet} from 'react-helmet-async';
import {FavoriteCard} from '../../components/favorites-card/favorite-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { getFavoriteOffers } from '../../store/app-data/selectors';
import { FavoritesEmptyPage } from '../favorites-empty/favorites-empty-page';
import {changeCity} from '../../store/app-process/app-process';
import {INITIAL_CITY} from '../../const';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const citiesFavoriteOffers = new Set(favoriteOffers.map((offer) => offer.city.name));

  return favoriteOffers.length === 0 ? (
    <FavoritesEmptyPage />
  ) : (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...citiesFavoriteOffers].map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        onClick={() => {
                          dispatch(changeCity(city));
                        }}
                        className="locations__item-link" to="/"
                      >
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((offer) =>
                      city === offer.city.name ? <FavoriteCard key={offer.id} offer={offer} /> : ''
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link
          onClick={() => {
            dispatch(changeCity(INITIAL_CITY));
          }}
          className="footer__logo-link" to="/"
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export {FavoritesPage};

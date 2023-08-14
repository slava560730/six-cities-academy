import {Link} from 'react-router-dom';
import {Header} from '../../components/header/header';
import {Helmet} from 'react-helmet-async';
import {FavoriteCard} from '../../components/favorites-card/favorite-card';
import {OfferType} from '../../types/property';

type FavoriteProps = {
  offers: OfferType[];
};

function FavoritesPage({offers}: FavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const citiesFavoriteOffers = new Set(favoriteOffers.map((offer) => offer.cityName));

  return (
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
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((offer) =>
                      city === offer.cityName ? <FavoriteCard key={offer.id} offer={offer} /> : ''
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export {FavoritesPage};

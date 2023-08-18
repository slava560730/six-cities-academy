import {OfferType} from '../../types/property';
import {Link} from 'react-router-dom';

type CardProps = {
  offer: OfferType;
  setSelectedOffer(value: number): void;
};

function Card ({offer, setSelectedOffer}: CardProps): JSX.Element {
  return (
    <article
      onMouseOver={() => {
        setSelectedOffer(offer.id);
      }}
      onMouseLeave={() => {
        setSelectedOffer(500);
      }}
      className="cities__card place-card"
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.cardSrc} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`${
              offer.isFavorite ? 'place-card__bookmark-button--active' : ''
            } place-card__bookmark-button button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.features.entire}</p>
      </div>
    </article>
  );
}

export {Card};

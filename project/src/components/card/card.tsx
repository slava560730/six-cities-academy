import {OfferType} from '../../types/property';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { fetchPostFavoriteStateAction } from '../../store/api-actions';
import { AuthorizationStatus } from '../../const';

type CardProps = {
  offer: OfferType;
  setSelectedOffer(value: number): void;
};

function Card ({offer, setSelectedOffer}: CardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const handleFavoiteButtonClick = () => {

    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
    dispatch(fetchPostFavoriteStateAction([
      offer.isFavorite ? '0' : '1',
      offer.id,
    ]));
  };

  return (
    <article
      onMouseOver={() => {
        setSelectedOffer(offer.id);
      }}
      onMouseLeave={() => {
        setSelectedOffer(500);
      }}
      onClick={() =>{
        window.scrollTo(0,0);
      }}
      className="cities__card place-card"
    >
      <div className="place-card__mark">
        <span>{(offer.isPremium) && 'Premium'}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={handleFavoiteButtonClick}
            className={cn('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': offer.isFavorite,
            })}
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
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export {Card};

import {OfferType} from '../../types/property';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, NULL_CITY_ID } from '../../const';
import { fetchPostFavoriteStateAction } from '../../store/api-actions';
import { FavoriteState} from '../../const';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';
import {WordToUpper} from '../../utils';
import { changeCurrentId } from '../../store/app-process/app-process';

type CardProps = {
  offer: OfferType;
  isNeedMouseLeave: boolean;
};

function Card ({offer, isNeedMouseLeave}: CardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthLogged = useAppSelector(getAuthLoggedStatus);

  const handleFavoriteButtonClick = () => {

    if (!isAuthLogged) {
      navigate(AppRoute.Login);
    }
    dispatch(fetchPostFavoriteStateAction([
      offer.isFavorite ? FavoriteState.NotFavorite : FavoriteState.Favorite,
      offer.id,
    ]));
  };

  const handleMouseOver = () => {
    dispatch(changeCurrentId(offer.id));
  };

  const handleMouseLeave = () => {
    if (isNeedMouseLeave) {
      dispatch(changeCurrentId(NULL_CITY_ID));
    }
  };

  const handleCardClick = () => {
    window.scrollTo(0,0);
  };

  return (
    <article
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="cities__card place-card"
    >
      <div className={cn({
        'place-card__mark': offer.isPremium,
      })}
      >
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
            onClick={handleFavoriteButtonClick}
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
        <p className="place-card__type">{WordToUpper(offer.type)}</p>
      </div>
    </article>
  );
}

export {Card};

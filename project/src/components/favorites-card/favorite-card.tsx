import {Link} from 'react-router-dom';
import {OfferType} from '../../types/property';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { FavoriteState } from '../../const';
import { fetchPostFavoriteStateAction } from '../../store/api-actions';
import {WordToUpper} from '../../utils';

type FavoriteCardProps = {
  offer: OfferType;
};

function FavoriteCard({offer}: FavoriteCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    dispatch(
      fetchPostFavoriteStateAction([
        offer.isFavorite ? FavoriteState.NotFavorite : FavoriteState.Favorite,
        offer.id,
      ])
    );
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': offer.isFavorite,
            })}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%'}}></span>
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

export {FavoriteCard};

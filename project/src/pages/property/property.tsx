import {Header} from '../../components/header/header';
import { AddReviewsList } from '../../components/reviews-list/reviews-list';
import {Helmet} from 'react-helmet-async';
import {Map} from '../../components/map/map';
import {classNamesMap, AppRoute, FavoriteState, NEED_MOUSE_LEAVE} from '../../const';
import {useEffect, useState} from 'react';
import {Card} from '../../components/card/card';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchNearbyOffersAction,
  fetchReviewsAction,
  fetchCurrentOfferAction,
  fetchPostFavoriteStateAction
} from '../../store/api-actions';
import { NotFoundPage } from '../not-found/not-found-page';
import {
  getOfferDataLoadingState,
  getNearbyOffers,
  getCurrentOffer,
  getServerError,
} from '../../store/app-data/selectors';
import { getAuthLoggedStatus } from '../../store/user-process/selectors';
import { LoadingScreen } from '../loading-screen/loading-screen';
import cn from 'classnames';
import { OfferType } from '../../types/property';

function PropertyPage (): JSX.Element {
  const params = useParams();
  const numberId = Number(params.id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isServerError = useAppSelector(getServerError);

  const isOfferDataLoading = useAppSelector(getOfferDataLoadingState);
  const nearOffers = useAppSelector(getNearbyOffers);
  const nearOffersCorrect = nearOffers.slice(0, 3);
  const currentOffer = useAppSelector(getCurrentOffer);
  const isAuthLogged = useAppSelector(getAuthLoggedStatus);
  const [selectedOffer, setSelectedOffer] = useState(numberId);

  useEffect(() => {
    if (numberId !== undefined) {
      dispatch(fetchReviewsAction(numberId));
      dispatch(fetchCurrentOfferAction(numberId));
      dispatch(fetchNearbyOffersAction(numberId));
    }
  }, [numberId]);

  if (isOfferDataLoading || !currentOffer) {
    return <LoadingScreen />;
  }

  if (isServerError) {
    return <NotFoundPage />;
  }

  const handleFavoriteButtonClick = () => {
    if (!isAuthLogged) {
      navigate(AppRoute.Login);
    }
    dispatch(
      fetchPostFavoriteStateAction([
        currentOffer.isFavorite ? FavoriteState.NotFavorite : FavoriteState.Favorite,
        currentOffer.id,
      ])
    );
  };

  return (
    <div className="page">
      <Helmet>
        <title>Property</title>
      </Helmet>
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.map((img) => (
                <div className="property__image-wrapper" key = {img}>
                  <img className="property__image" src={img} alt={currentOffer.description}/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={cn({
                'property__mark': currentOffer.isPremium,
              })}
              >
                <span>{(currentOffer.isPremium) && 'Premium'}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button
                  className={cn('property__bookmark-button button', {
                    'property__bookmark-button--active': currentOffer.isFavorite,
                  })}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg className={cn('property__bookmark-icon', {
                    'property__bookmark-icon--active': currentOffer.isFavorite,
                  })}
                  width="31" height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.goods.map((good) => (
                    <li className="property__inside-item" key = {good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {(currentOffer.host.isPro) && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <AddReviewsList />
            </div>
          </div>
          <section className="property__map map">
            <Map selectedOffer={selectedOffer} offers={[...nearOffersCorrect, currentOffer] as OfferType[]} classNameMap={classNamesMap.Property}></Map>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffersCorrect.map((offer) => (
                <Card offerId ={offer.id} isNeedMouseLeave={!NEED_MOUSE_LEAVE} offer={offer} setSelectedOffer={setSelectedOffer} key={offer.id}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {PropertyPage};

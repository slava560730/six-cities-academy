import {Header} from '../../components/header/header';
import {AddFormReview} from '../../components/add-form-review/add-form-review';
import {Helmet} from 'react-helmet-async';
import {ReviewsType} from '../../types/property';
import {Map} from '../../components/map/map';
import {classNamesMap} from '../../const';
import { offers} from '../../mocks/offers';
import { useState } from 'react';
import {Card} from '../../components/card/card';
import { useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';

type PropertyPageProps = {
  reviews: ReviewsType[];
}

function PropertyPage ({reviews}: PropertyPageProps): JSX.Element {
  const DefaultOffer = offers[0];

  const [selectedOffer, setSelectedOffer] = useState(500);
  const offersCity = useAppSelector((state) => state.offerCity);
  const params = useParams();
  const numberId = Number(params.id);
  const currentOffer = offersCity.find((offer) => offer.id === numberId) || DefaultOffer;

  const nearOffers = offers.filter((offer) => offer.id !== numberId);

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
              <div className="property__image-wrapper">
                {currentOffer.images.map((img) => (
                  <div className="property__image-wrapper" key = {img}>
                    <img className="property__image" src={img} alt={descriptiom}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
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
                  {currentOffer.features.entire}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.features.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.features.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.insideItems.map((insideItem) => (
                    <li className="property__inside-item" key = {insideItem}>
                      {insideItem}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.hostSrc} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.hostName}
                  </span>
                  <span className="property__user-status">
                    {(currentOffer.host.hostStatus) && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.host.hostDescription}
                  </p>
                </div>
              </div>
              <AddFormReview reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map selectedOffer={selectedOffer} classNameMap={classNamesMap.Property}></Map>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offer) => (
                <Card offer={offer} setSelectedOffer={setSelectedOffer} key={offer.id}/>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {PropertyPage};

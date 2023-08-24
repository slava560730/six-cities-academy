import {createAction} from '@reduxjs/toolkit';
import {OfferType, ReviewsType} from '../types/property';
import {SortType, AuthorizationStatus, AppRoute} from '../const';

const changeCity = createAction('CHANGE_CITY',(city: string) => ({
  payload: {
    city,
  },
}));
const fillOfferList = createAction('FILL_OFFER_LIST',(offers: OfferType[], city: string) => {
  const offersCity = offers.filter((offer) => offer.city.name === city);

  return {
    payload: {
      offersCity: offersCity,
    },
  };
}
);

const sortOffers = createAction('SORT_CARDS',(offersCity: OfferType[], currentSortType: string) => {
  switch (currentSortType) {
    case SortType.Popular:
      return {
        payload: {
          offersCity: offersCity,
          currentSortType:currentSortType,
        },
      };
    case SortType.PriceLowToHigh:
      return {
        payload: {
          offersCity: [...offersCity].sort((offerA, offerB) => offerA.price - offerB.price),
          currentSortType:currentSortType,
        },
      };
    case SortType.PriceHighToLow:
      return {
        payload: {
          offersCity: [...offersCity].sort((offerA, offerB) => offerB.price - offerA.price),
          currentSortType:currentSortType,
        },
      };
    case SortType.TopRatedFirst:
      return {
        payload: {
          offersCity: [...offersCity].sort((offerA, offerB) => offerB.rating - offerA.rating),
          currentSortType:currentSortType,
        },
      };

    default:
      return {
        payload: {
          offersCity: offersCity,
          currentSortType:currentSortType,
        },
      };
  }
});

const loadUserInfo = createAction('LOAD_USER_INFO', (userEmail: string, avatarUrl: string) => ({
  payload: {
    userEmail,
    avatarUrl,
  },
}));

const redirectToRoute = createAction('REDIRECT_TO_ROUTE', (toRoute: AppRoute) => ({
  payload: toRoute,
}));

const loadReviews = createAction('LOAD_REVIEWS', (reviews: ReviewsType[]) => ({
  payload: {
    reviews: reviews,
  },
}));

const loadOffers = createAction<OfferType[]>('LOAD_OFFERS');

const setOffersDataLoadingStatus = createAction<boolean>('DATA_LOADING_STATUS');

const requireAuthorization = createAction<AuthorizationStatus>('REQUIRE_AUTHORIZATION');

const loadCurrentOffer = createAction('LOAD_CURRENT_OFFER', (currentOffer: OfferType) => ({
  payload: {
    currentOffer,
  },
}));

const loadNearbyOffers = createAction('LOAD_NEARBY_OFFERS', (nearbyOffers: OfferType[]) => ({
  payload: {
    nearbyOffers,
  },
}));

const setOfferDataLoadingStatus = createAction('SET_OFFER_DATA_LOADING_STATUS', (isOfferDataLoading: boolean) => ({
  payload: {
    isOfferDataLoading: isOfferDataLoading,
  },
}));

const setFormActiveState = createAction('SET_FORM_ACTIVE_STATE', (formActiveState: boolean) => ({
  payload: {
    formActiveState,
  },
}));

const setFavoriteStatus = createAction('SET_OFFER_FAVORITE_STATUS', (isFavoriteStatus: boolean) => ({
  payload: {
    isFavoriteStatus: isFavoriteStatus,
  },
}));

export {setFavoriteStatus, setFormActiveState, loadNearbyOffers, setOfferDataLoadingStatus, loadCurrentOffer, loadReviews, redirectToRoute, loadUserInfo, changeCity, fillOfferList, sortOffers, loadOffers, setOffersDataLoadingStatus, requireAuthorization};

import {createAction} from '@reduxjs/toolkit';
import {OfferType, ReviewsType} from '../types/property';
import {SortType, AppRoute} from '../const';

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

export {setFavoriteStatus, setFormActiveState, redirectToRoute, loadUserInfo, changeCity, fillOfferList, sortOffers};

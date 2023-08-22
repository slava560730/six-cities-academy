import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/property';
import {SortType} from '../const';

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

const loadOffers = createAction<OfferType[]>('LOAD_OFFERS');

const setOffersDataLoadingStatus = createAction<boolean>('DATA_LOADING_STATUS');

export {changeCity, fillOfferList, sortOffers, loadOffers, setOffersDataLoadingStatus};

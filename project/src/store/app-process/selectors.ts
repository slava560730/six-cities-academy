import {Namespace, SortType} from '../../const';
import {State} from '../../types/state';
import { getOffers } from '../app-data/selectors';
import { createSelector } from '@reduxjs/toolkit';

const getCurrentCity = (state: State): string => state[Namespace.App].city;
const getCurrentSortType = (state: State): string => state[Namespace.App].currentSortType;
const getSelectState = (state: State): boolean => state[Namespace.App].selectState;
const getCurrentId = (state: State): number | null => state[Namespace.App].currentId;

const getOffersByCity = createSelector(getOffers, getCurrentCity, (offers, currentCity) =>
  offers.filter((offer) => offer.city.name === currentCity)
);

const getSortedOffers = createSelector(
  getOffersByCity,
  getCurrentSortType,
  (offers, currentSortType) => {
    switch (currentSortType) {
      case SortType.PriceLowToHigh:
        return [...offers].sort((offerA, offerB) => offerA.price - offerB.price);
      case SortType.PriceHighToLow:
        return [...offers].sort((offerA, offerB) => offerB.price - offerA.price);
      case SortType.TopRatedFirst:
        return [...offers].sort((offerA, offerB) => offerB.rating - offerA.rating);
      default:
        return offers;
    }
  }
);

export {
  getCurrentId,
  getCurrentCity,
  getCurrentSortType,
  getSelectState,
  getOffersByCity,
  getSortedOffers
};

import {MAX_REVIEWS, Namespace} from '../../const';
import {State} from '../../types/state';
import {NewReview, OfferType, ReviewsType} from '../../types/property';
import {createSelector} from '@reduxjs/toolkit';
import {sortByDay} from '../../utils';

const getOffers = (state: State): OfferType[] => state[Namespace.Data].offers;
const getNearbyOffers = (state: State): OfferType[] => state[Namespace.Data].nearbyOffers;
const getOffersDataLoadingState = (state: State): boolean => state[Namespace.Data].isOffersDataLoading;
const getOfferDataLoadingState = (state: State): boolean => state[Namespace.Data].isOfferDataLoading;
const getFormActiveState = (state: State): boolean => state[Namespace.Data].formActiveState;
const getCurrentOffer = (state: State): OfferType | null => state[Namespace.Data].currentOffer;
const getReviews = (state: State): ReviewsType[] => state[Namespace.Data].reviews;
const getFavoriteOffers = (state: State): OfferType[] => state[Namespace.Data].favoriteOffers;
const getPostFavoriteStateStatus = (state: State): boolean =>
  state[Namespace.Data].isFavoriteStatus;
const getFavoriteOffersCount = (state: State): number =>
  state[Namespace.Data].favoriteOffers.length;
const getFormData = (state: State): NewReview => state[Namespace.Data].formData;
const getServerError = (state: State): boolean => state[Namespace.Data].isServerError;

const getSortedReviews = createSelector(getReviews, (reviews) =>
  reviews.slice(MAX_REVIEWS).sort(sortByDay)
);

export {
  getServerError,
  getSortedReviews,
  getFormData,
  getOffers,
  getNearbyOffers,
  getOffersDataLoadingState,
  getOfferDataLoadingState,
  getFormActiveState,
  getCurrentOffer,
  getFavoriteOffers,
  getReviews,
  getPostFavoriteStateStatus,
  getFavoriteOffersCount
};

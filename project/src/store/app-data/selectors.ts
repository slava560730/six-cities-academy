import {Namespace} from '../../const';
import {State} from '../../types/state';
import {OfferType, ReviewsType} from '../../types/property';

const getOffers = (state: State): OfferType[] => state[Namespace.Data].offers;
const getNearbyOffers = (state: State): OfferType[] => state[Namespace.Data].nearbyOffers;
const getOffersDataLoadingState = (state: State): boolean => state[Namespace.Data].isOffersDataLoading;
const getOfferDataLoadingState = (state: State): boolean => state[Namespace.Data].isOfferDataLoading;
const getFormActiveState = (state: State): boolean => state[Namespace.Data].formActiveState;
const getCurrentOffer = (state: State): OfferType | undefined => state[Namespace.Data].currentOffer;
const getReviews = (state: State): ReviewsType[] => state[Namespace.Data].reviews;
const getFavoriteOffers = (state: State): OfferType[] => state[Namespace.Data].favoriteOffers;
const getPostFavoriteStateStatus = (state: State): boolean =>
  state[Namespace.Data].isFavoriteStatus;
const getFavoriteOffersCount = (state: State): number =>
  state[Namespace.Data].favoriteOffers.length;

export {
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

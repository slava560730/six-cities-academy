import {Namespace} from '../../const';
import {State} from '../../types/state';
import {OfferType, ReviewsType} from '../../types/property';
import {createSelector} from '@reduxjs/toolkit';

const getOffers = (state: State): OfferType[] => state[Namespace.Data].offers;
const getNearbyOffers = (state: State): OfferType[] => state[Namespace.Data].nearbyOffers;
const getOffersDataLoadingState = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
const getOfferDataLoadingState = (state: State): boolean => state[NameSpace.Data].isOfferDataLoading;
const getFormActiveState = (state: State): boolean => state[NameSpace.Data].formActiveState;
const getCurrentOffer = (state: State): OfferType | undefined => state[NameSpace.Data].currentOffer;
const getReviews = (state: State): ReviewsType[] => state[NameSpace.Data].reviews;

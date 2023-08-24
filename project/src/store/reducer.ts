import {createReducer} from '@reduxjs/toolkit';
import {
  loadReviews,
  changeCity,
  fillOfferList,
  sortOffers,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  loadUserInfo,
  loadCurrentOffer,
  setOfferDataLoadingStatus,
  loadNearbyOffers,
  setFormActiveState,
  setFavoriteStatus,
} from './action';
import { OfferType, ReviewsType } from '../types/property';
import {SortType, AuthorizationStatus} from '../const';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
  offers: OfferType[];
  reviews: ReviewsType[];
  currentSortType: string;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  error: string | null;
  userEmail: string;
  avatarUrl: string;
  currentOffer?: OfferType | undefined;
  nearbyOffers : OfferType[];
  isOfferDataLoading: boolean;
  formActiveState: boolean;
  isFavoriteStatus: boolean;
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: [],
  reviews: [],
  currentSortType: SortType.Popular,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: '',
  avatarUrl: '../img/avatar.svg',
  currentOffer: undefined,
  nearbyOffers : [],
  isOfferDataLoading: false,
  formActiveState: false,
  isFavoriteStatus: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerCity = action.payload.offersCity;
    })
    .addCase(sortOffers, (state, action) => {
      state.offerCity = action.payload.offersCity;
      state.currentSortType = action.payload.currentSortType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload.isOfferDataLoading;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadReviews, (state, action) =>{
      state.reviews = action.payload.reviews;
    })
    .addCase(loadUserInfo, (state, action) =>{
      state.userEmail = action.payload.userEmail;
      state.avatarUrl = action.payload.avatarUrl;
    })
    .addCase(loadCurrentOffer, (state, action) =>{
      state.currentOffer = action.payload.currentOffer;
    })
    .addCase(loadNearbyOffers, (state, action) =>{
      state.nearbyOffers = action.payload.nearbyOffers;
    })
    .addCase(setFormActiveState, (state, action) =>{
      state.formActiveState = action.payload.formActiveState;
    })
    .addCase(setFavoriteStatus, (state, action) => {
      state.isFavoriteStatus = action.payload.isFavoriteStatus;
    });
});

export {reducer};

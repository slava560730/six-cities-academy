import {createReducer} from '@reduxjs/toolkit';
import {
  loadReviews,
  changeCity,
  fillOfferList,
  sortOffers,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  loadUserInfo
} from './action';
import { OfferType, ReviewsType } from '../types/property';
// import {offers} from '../mocks/offers';
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
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: [],
  reviews: [],
  currentSortType: SortType.Popular,
  isOffersDataLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userEmail: '',
  avatarUrl: '../img/avatar.svg',
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadReviews, (state, action) =>{
      state.reviews = action.payload.reviews;
    })
    .addCase(loadUserInfo, (state, action) =>{
      state.userEmail = action.payload.userEmail;
      state.avatarUrl = action.payload.avatarUrl;
    });
});

export {reducer};

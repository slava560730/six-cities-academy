import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList, sortOffers, loadOffers, setOffersDataLoadingStatus, requireAuthorization } from './action';
import { OfferType } from '../types/property';
// import {offers} from '../mocks/offers';
import {SortType, AuthorizationStatus} from '../const';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
  offers: OfferType[];
  currentSortType: string;
  isOffersDataLoading: boolean;
  authorizationStatus: string;
  error: string | null;
  userInfo: string;
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: [],
  currentSortType: SortType.Popular,
  isOffersDataLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userInfo: '',
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
    });
});

export {reducer};

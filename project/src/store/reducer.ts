import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList, sortOffers, loadOffers, setOffersDataLoadingStatus } from './action';
import { OfferType } from '../types/property';
// import {offers} from '../mocks/offers';
import {SortType} from '../const';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
  offers: OfferType[];
  currentSortType: string;
  isOffersDataLoading: boolean;
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: [],
  currentSortType: SortType.Popular,
  isOffersDataLoading: true,
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
    });
});

export {reducer};

import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList, sortOffers } from './action';
import { OfferType } from '../types/property';
import {offers} from '../mocks/offers';
import {SortType} from '../const';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
  offers: OfferType[];
  currentSortType: string;
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: offers,
  currentSortType: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerCity = state.offers.filter((offer) => offer.city.cityName === action.payload.city);
    })
    .addCase(sortOffers, (state, action) => {
      state.offerCity = action.payload.offersCity;
      state.currentSortType = action.payload.currentSortType;
    });
});

export {reducer};

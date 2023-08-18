import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { OfferType } from '../types/property';
import {offers} from "../mocks/offers";

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
  offers: OfferType[];
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerCity = state.offers.filter((offer) => offer.city.cityName === action.payload.city)
    });
});

export {reducer};

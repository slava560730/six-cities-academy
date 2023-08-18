import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { OfferType } from '../types/property';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerCity: OfferType[];
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerCity: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerCity = action.payload.offersCity;
    });
});

export {reducer};

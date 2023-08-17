import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { OfferType } from '../types/property';

const INITIAL_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offerList: OfferType[];
};

const initialState: InitialStateType = {
  city: INITIAL_CITY,
  offerList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offerList = action.payload.offersCity;
    });
});

export {reducer};

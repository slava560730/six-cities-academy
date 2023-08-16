import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOfferList } from './action';
import { OfferType } from '../types/property';
import { offers } from '../mocks/offers';

const INITIAL_CITY = 'Paris'
const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']

const initialState = {
  city: INITIAL_CITY,
  offerList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {

    });
    builder
    .addCase(fillOfferList, (state) => {

    });
});

export {reducer};

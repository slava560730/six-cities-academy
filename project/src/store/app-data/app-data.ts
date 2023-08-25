import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../const';
import {AppData} from "../../types/state";
import {fetchOffersAction,
        fetchCurrentOfferAction,
        fetchNearbyOffersAction,
        fetchReviewsAction,
        fetchPostReviewAction,
} from '../api-actions';

const initialState: AppData = {
  offers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  currentOffer: undefined,
  nearbyOffers : [],
  reviews: [],
  formActiveState: false,
};

const AppData = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state,action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchPostReviewAction.pending, (state) => {
        state.formActiveState = true;
      })
      .addCase(fetchPostReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.formActiveState = false;
      })
  }
});

export type {AppData};

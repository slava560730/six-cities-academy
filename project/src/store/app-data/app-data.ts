import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../const';
import {AppData} from '../../types/state';
import {fetchOffersAction,
  fetchCurrentOfferAction,
  fetchNearbyOffersAction,
  fetchReviewsAction,
  fetchPostReviewAction,
  fetchFavoriteOffersAction,
  fetchPostFavoriteStateAction,
} from '../api-actions';
import { updateOffers } from '../../utils';

const initialState: AppData = {
  offers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  currentOffer: undefined,
  nearbyOffers : [],
  reviews: [],
  formActiveState: false,
  isFavoriteStatus: false,
  favoriteOffers: [],
};

const appData = createSlice({
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
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchPostFavoriteStateAction.pending, (state) => {
        state.isFavoriteStatus = true;
      })
      .addCase(fetchPostFavoriteStateAction.rejected, (state) => {
        state.isFavoriteStatus = true;
      })
      .addCase(fetchPostFavoriteStateAction.fulfilled, (state, action) => {
        state.offers = updateOffers(state.offers, action.payload);
        state.nearbyOffers = updateOffers(state.nearbyOffers, action.payload);
        state.isFavoriteStatus = false;
        if (state.currentOffer) {
          state.currentOffer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export {appData};

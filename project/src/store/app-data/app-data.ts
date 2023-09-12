import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace, DEFAULT_REVIEW_STATE} from '../../const';
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
import {NewReview} from '../../types/property';

const initialState: AppData = {
  offers: [],
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  currentOffer: null,
  nearbyOffers : [],
  reviews: [],
  formActiveState: false,
  isFavoriteStatus: false,
  favoriteOffers: [],
  formData: DEFAULT_REVIEW_STATE,
  isServerError: false,
};

const appData = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {
    changeFormData: (state, action: PayloadAction<NewReview>) => {
      state.formData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
        state.isServerError = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isServerError = true;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
        state.isServerError = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isServerError = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state,action) => {
        state.currentOffer = action.payload;
        state.isOfferDataLoading = false;
        state.isServerError = false;
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
      .addCase(fetchPostReviewAction.rejected, (state) => {
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
export const { changeFormData } = appData.actions;

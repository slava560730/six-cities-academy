import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {NewReview, OfferType, ReviewsType} from './property';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
  avatarUrl: string;
};

type AppData = {
  offers: OfferType[];
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  currentOffer: OfferType | null;
  nearbyOffers : OfferType[];
  reviews: ReviewsType[];
  formActiveState: boolean;
  isFavoriteStatus: boolean;
  favoriteOffers: OfferType[];
  formData: NewReview;
  isServerError: boolean;
};

type AppProcess = {
  city: string;
  currentSortType: string;
  selectState: boolean;
  currentId: number | null;
};

export type {AppProcess, AppData, State, AppDispatch, UserProcess};

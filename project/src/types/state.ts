import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {OfferType, ReviewsType} from './property';

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
  currentOffer?: OfferType | undefined;
  nearbyOffers : OfferType[];
  reviews: ReviewsType[];
  formActiveState: boolean;
  isFavoriteStatus: boolean;
  favoriteOffers: OfferType[];
};

type AppProcess = {
  city: string;
  currentSortType: string;
  selectState: boolean;
};

export type {AppProcess, AppData, State, AppDispatch, UserProcess};

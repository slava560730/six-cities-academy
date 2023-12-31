import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferType, ReviewsType, NewReview } from '../types/property';
import {redirectToRoute} from './action';
import {AppRoute, APIRoute} from '../const';
import { AuthData } from '../types/auth-data';
import { UserData, UserDataProfile } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  },
);

const fetchReviewsAction = createAsyncThunk<
  ReviewsType[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async (id, { extra: api }) => {
  const { data } = await api.get<ReviewsType[]>(`${APIRoute.Reviews}${id}`);
  return data;
});

const fetchPostReviewAction = createAsyncThunk<
  ReviewsType[],
  [NewReview, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPostReview', async ([{ comment, rating }, id], { extra: api }) => {
  const { data } = await api.post<ReviewsType[]>(`${APIRoute.Reviews}${id}`, { comment, rating });
  return data;
});


const checkAuthAction = createAsyncThunk<UserDataProfile, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {
      data: {email, avatarUrl},
    } = await api.get<UserData>(APIRoute.Login);
    return { avatarUrl: avatarUrl, email: email };
  },
);

const loginAction = createAsyncThunk<UserDataProfile, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {
      data: {token, avatarUrl},
    } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    return { avatarUrl: avatarUrl, email: email };
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

const fetchCurrentOfferAction = createAsyncThunk<
  OfferType,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchCurrentOffer', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}${id}`);
  return data;
});

const fetchNearbyOffersAction = createAsyncThunk<
  OfferType[],
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}${id}${APIRoute.Nearby}`);
  return data;
});

const fetchPostFavoriteStateAction = createAsyncThunk<
  OfferType,
  [string, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPostFavoriteState', async ([favoriteState, id], { extra: api }) => {
  const { data } = await api.post<OfferType>(`${APIRoute.Favorite}${id}/${favoriteState}`);
  return data;
});

const fetchFavoriteOffersAction = createAsyncThunk<
  OfferType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
  return data;
});

export {fetchFavoriteOffersAction, fetchPostFavoriteStateAction, fetchPostReviewAction, fetchNearbyOffersAction, fetchCurrentOfferAction, fetchReviewsAction, fetchOffersAction, checkAuthAction, loginAction, logoutAction};

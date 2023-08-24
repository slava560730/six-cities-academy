import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { OfferType, ReviewsType, NewReview } from '../types/property';
import {setOfferDataLoadingStatus, loadCurrentOffer, loadReviews, redirectToRoute, loadOffers, setOffersDataLoadingStatus, requireAuthorization, loadUserInfo, loadNearbyOffers } from './action';
import {AppRoute, APIRoute, AuthorizationStatus} from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'FETCH_OFFERS',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

const fetchReviewsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_REVIEWS', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewsType[]>(`${APIRoute.Reviews}${id}`);
  dispatch(loadReviews(data));
});

const fetchPostReviewAction = createAsyncThunk<
  void,
  [NewReview, number],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_POST_REVIEW', async ([{ comment, rating }, id], { dispatch, extra: api }) => {
  const { data } = await api.post<ReviewsType[]>(`${APIRoute.Reviews}${id}`, { comment, rating });
  dispatch(loadReviews(data));
});


const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER_CHECK_AUTH',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {
        data: {email, avatarUrl},
      } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserInfo(email, avatarUrl));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER_LOGIN',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {
      data: {token, avatarUrl},
    } = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserInfo(email, avatarUrl));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER_LOGOUT',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

const fetchCurrentOfferAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_CURRENT_OFFER', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferDataLoadingStatus(true));
  const { data } = await api.get<OfferType>(`${APIRoute.Offers}${id}`);
  dispatch(setOfferDataLoadingStatus(false));
  dispatch(loadCurrentOffer(data));
});

const fetchNearbyOffersAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_NEARBY_OFFERS', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}${id}${APIRoute.Nearby}`);
  dispatch(loadNearbyOffers(data));
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

export {fetchPostFavoriteStateAction, fetchPostReviewAction, fetchNearbyOffersAction, fetchCurrentOfferAction, fetchReviewsAction, fetchOffersAction, checkAuthAction, loginAction, logoutAction};

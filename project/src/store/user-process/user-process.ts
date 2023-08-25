import {createSlice} from '@reduxjs/toolkit';
import {Namespace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
  avatarUrl: '../img/avatar.svg',
};

const  userProcess = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload.email;
        state.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload.email;
        state.avatarUrl = action.payload.avatarUrl;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

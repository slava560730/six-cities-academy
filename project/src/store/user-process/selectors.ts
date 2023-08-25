import { AuthorizationStatus, Namespace } from '../../const';
import { State } from '../../types/state';

const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[Namespace.User].authorizationStatus;
const getAuthCheckedStatus = (state: State): boolean =>
  state[Namespace.User].authorizationStatus !== AuthorizationStatus.Unknown;
const getAuthLoggedStatus = (state: State): boolean =>
  state[Namespace.User].authorizationStatus === AuthorizationStatus.Auth;

const getUserEmail = (state: State): string => state[Namespace.User].userEmail;
const getAvatarUrl = (state: State): string => state[Namespace.User].avatarUrl;

export {
  getAuthorizationStatus,
  getAuthCheckedStatus,
  getAuthLoggedStatus,
  getUserEmail,
  getAvatarUrl
};

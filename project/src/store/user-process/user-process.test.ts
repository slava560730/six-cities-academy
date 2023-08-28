import { userProcess } from './user-process';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, logoutAction } from '../api-actions';

describe('Reducer: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: '',
      avatarUrl: '../img/avatar.svg',};
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userEmail: '',
      avatarUrl: '../img/avatar.svg'});
  });

  it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
    expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userEmail: '',
      avatarUrl: '../img/avatar.svg'});
  });

  it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
    expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userEmail: '',
      avatarUrl: '../img/avatar.svg'});
  });
});

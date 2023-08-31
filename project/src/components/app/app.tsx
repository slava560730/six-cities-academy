import {MainPage} from '../../pages/main/main-page';
import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {FavoritesPage} from '../../pages/favorites/favorites-page';
import {LoginPage} from '../../pages/login/login-page';
import {PropertyPage} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-router';
import browserHistory from '../../browser-history';
import { getOffersDataLoadingState } from '../../store/app-data/selectors';
import { fetchOffersAction } from '../../store/api-actions';
import {useEffect} from 'react';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingState);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, []);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

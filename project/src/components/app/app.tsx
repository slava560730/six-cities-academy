import {MainPage} from '../../pages/main/main-page';
import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {FavoritesPage} from '../../pages/favorites/favorites-page';
import {LoginPage} from '../../pages/login/login-page';
import {PropertyPage} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType, ReviewsType} from '../../types/property';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-router';
import browserHistory from '../../browser-history';

type AppProps = {
  offers: OfferType[];
};

function App({offers}: AppProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  if (isOffersDataLoading) {
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers} />
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

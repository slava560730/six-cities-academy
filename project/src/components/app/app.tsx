import {MainPage} from '../../pages/main/main-page';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {FavoritesPage} from '../../pages/favorites/favorites-page';
import {LoginPage} from '../../pages/login/login-page';
import {PropertyNotLoggedPage} from '../../pages/property-not-logged/property-not-logged';
import {NotFoundPage} from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType, HostType, ReviewsType} from '../../types/property';

type AppProps = {
  cardCount: number;
  offers: OfferType[];
  host: HostType;
  reviews: ReviewsType;
};

function App({cardCount, offers, host, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage cardCount={cardCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyNotLoggedPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

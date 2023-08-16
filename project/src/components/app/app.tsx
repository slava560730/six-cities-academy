import {MainPage} from '../../pages/main/main-page';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {FavoritesPage} from '../../pages/favorites/favorites-page';
import {LoginPage} from '../../pages/login/login-page';
import {PropertyPage} from '../../pages/property/property';
import {NotFoundPage} from '../../pages/not-found/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {OfferType, ReviewsType} from '../../types/property';

type AppProps = {
  cardCount: number;
  offers: OfferType[];
  reviews: ReviewsType[];
};

function App({cardCount, offers, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage cardCount={cardCount} offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyPage reviews={reviews} offers={offers}/>}
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

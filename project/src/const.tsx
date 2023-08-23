import { City } from './types/property';

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = '../../img/pin.svg';
const URL_MARKER_CURRENT = '../../img/pin-active.svg';

enum classNamesMap {
  Main = 'main-map',
  Property = 'property-map',
}

export {AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, classNamesMap};

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY: City = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  name: 'Paris',
};

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/',
}

const MAX_REVIEW_LENGTH = 300;
const MIN_REVIEW_LENGTH = 50;

export {DEFAULT_CITY, CITIES, SortType, APIRoute, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH};

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

const defaultCity: City = {
  cityName: 'Paris',
  locationLat: 52.3909553943508,
  locationLong: 4.85309666406198,
  locationZoom: 10,
};

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export {defaultCity, CITIES, SortType};

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
  Offers = '/hotels/',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/',
  Nearby = '/nearby',
  Favorite = '/favorite/',
}

const MAX_REVIEW_LENGTH = 300;
const MIN_REVIEW_LENGTH = 50;

enum FavoriteState {
  Favorite = '1',
  NotFavorite = '0',
}

enum Namespace {
  User = 'USER',
  Data = 'DATA',
  App = 'APP',
}

const INITIAL_CITY = 'Paris';

const NULL_CITY_ID = 0;

const SELECT_OPEN = true;

const NEED_MOUSE_LEAVE = true;

const REVIEW_RATING = [
  {
    title: 'perfect',
    value: 5,
  },
  {
    title: 'good',
    value: 4,
  },
  {
    title: 'not bad',
    value: 3,
  },
  {
    title: 'badly',
    value: 2,
  },
  {
    title: 'terribly',
    value: 1,
  },
];

const DEFAULT_REVIEW_STATE = {
  comment: '',
  rating: 0,
};

const MAX_REVIEWS = 10;

const PASSWORD_NOTIFY = 'Пароль должен содержать одну цифру и одну букву';

export {MAX_REVIEWS, DEFAULT_REVIEW_STATE, NEED_MOUSE_LEAVE, REVIEW_RATING, PASSWORD_NOTIFY, SELECT_OPEN, NULL_CITY_ID, INITIAL_CITY, Namespace, FavoriteState, DEFAULT_CITY, CITIES, SortType, APIRoute, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH};

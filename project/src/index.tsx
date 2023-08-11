import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

type SettingType = {
  cardCount:number;
}

const Setting:SettingType = {
  cardCount: offers.length,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.cardCount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
);

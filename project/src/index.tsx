import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

type SettingType = {
  cardCount:number;
}

const Setting:SettingType = {
  cardCount: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.cardCount}
    />
  </React.StrictMode>,
);

import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

const redirect: Middleware<unknown, Reducer> = (_store) => (next) =>
  (action: PayloadAction<string>) => {
    if (action.type === 'REDIRECT_TO_ROUTE') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

export {redirect};

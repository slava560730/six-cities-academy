import {combineReducers} from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { Namespace } from '../const';
import { appData } from './app-data/app-data';
import { appProcess } from './app-process/app-process';

const rootReducer = combineReducers ({
  [Namespace.User]: userProcess.reducer,
  [Namespace.Data]: appData.reducer,
  [Namespace.App]: appProcess.reducer,
});

export {rootReducer};

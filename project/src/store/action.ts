import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';


const redirectToRoute = createAction('redirectToRoute', (toRoute: AppRoute) => ({
  payload: toRoute,
}));

export {redirectToRoute};

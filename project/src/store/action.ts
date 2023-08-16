import {createAction} from '@reduxjs/toolkit';

const changeCity = createAction('CHANGE_CITY');
const fillOfferList = createAction('FILL_OFFER_LIST');

export {changeCity, fillOfferList};

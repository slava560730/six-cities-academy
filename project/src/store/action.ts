import {createAction} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';

const changeCity = createAction('CHANGE_CITY',(city: string) => ({
  payload: {
    city,
  },
}));
const fillOfferList = createAction('FILL_OFFER_LIST',(city: string) => {
  const offersCity = offers.filter((offer) => offer.city.cityName === city);

  return {
    payload: {
      offersCity: offersCity,
    },
  };
});
export {changeCity, fillOfferList};

import { appData } from './app-data';

describe('Reducer: gameData', () => {
  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        isOffersDataLoading: false,
        isOfferDataLoading: false,
        currentOffer: undefined,
        nearbyOffers : [],
        reviews: [],
        formActiveState: false,
        isFavoriteStatus: false,
        favoriteOffers: [],
      });
  });
});

import { OfferType } from './types/property';

const updateOffers = (offers: OfferType[], updatedOffer: OfferType | null) =>
  offers.map((item) => {
    if (updatedOffer === null || item.id !== updatedOffer.id) {
      return item;
    }
    return {
      ...item,
      ...updatedOffer,
    };
  });

export {updateOffers};

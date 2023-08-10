import {OfferType} from "../types/property";

const BEDROOMS_VALUE = 3;
const ADULTS_VALUE = 2;

const offers: OfferType[] = [
  {
   src: ['img/apartment-01.jpg', 'img/apartment-01.jpg', 'img/apartment-01.jpg'],
   mark: 'Premium',
   name: 'Beautiful &amp; luxurious studio at great location',
   rating: 4.5,
   features: {
    entire: 'Apartment',
    bedrooms: BEDROOMS_VALUE + 'bedrooms',
    adults: 'Max' + ADULTS_VALUE + 'adults',
   },
   price: 120,
   insideItem: [
    'Wi-Fi', 'Washing machine'
   ],
  },
];

export {offers};

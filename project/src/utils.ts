import {OfferType, ReviewsType} from './types/property';

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

function getRandomNumber (min: number, max: number) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);

  return result;
}

const sortByDay = (array: ReviewsType[]) => [...array].sort((dataA, dataB) => Number(dataA.date) - Number(dataB.date));

const WordToUpper = (word: string) => word[0].toUpperCase() + word.slice(1);


const getRandomArrayElement = (elements: string[]) => elements[getRandomNumber(0, elements.length - 1)];

export {sortByDay, WordToUpper, updateOffers, getRandomArrayElement};

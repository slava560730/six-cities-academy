type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

type OfferType = {
  bedrooms: number;
  city: City;
  images: string[];
  description: string;
  title: string;
  previewImage: string;
  rating: number;
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  goods: string[];
  maxAdults: number;
  price: number;
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  type: string;
  id: number;
};

type ReviewsType = {
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  comment: string;
  date: string;
  id: number;
  rating: number;
};

type NewReview = {
  comment: string;
  rating: number;
};

export type {NewReview, OfferType, ReviewsType, City};

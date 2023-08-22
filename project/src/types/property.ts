type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  },
  name: string;
};

type FeaturesType = {
  entire: string;
  bedrooms: number;
  adults: number;
};

type HostType = {
  hostId: number;
  hostSrc: string;
  hostName: string;
  hostStatus: boolean;
  hostDescription: string;
};

type ImagesType = {
  imageSrc: string;
  imageAlt: string;
  id: number;
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
  src: string;
  userName: string;
  comment: string;
  date: string;
  id: number;
  rating: number;
};

export type {OfferType, ReviewsType, City};

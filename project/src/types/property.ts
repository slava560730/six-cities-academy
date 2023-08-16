type City = {
  cityName: string;
  locationLat: number;
  locationLong: number;
  locationZoom: number;
};

type NearCard = {
  src: string;
  price: number;
  isFavorite: boolean;
  title: string;
  features: string;
  id: number;
};

type FeaturesType = {
  entire: string;
  bedrooms: number | string;
  adults: number | string;
};

type OfferType = {
  city: City;
  imageSrc: string[];
  mark: string;
  title: string;
  rating: number;
  isFavorite: boolean;
  features: FeaturesType;
  price: number | string;
  insideItem: string[];
  hostId: number;
  hostSrc: string;
  hostName: string;
  hostStatus: string;
  hostDescription: string;
  cardSrc: string;
  id: number;
  nearcard: NearCard;
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

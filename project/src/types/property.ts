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

type OfferType = {
  city: City;
  imagesSrc: string[];
  imagesAlt: string;
  mark: string;
  title: string;
  rating: number;
  isFavorite: boolean;
  features: FeaturesType;
  price: number | string;
  insideItems: string[];
  host: HostType;
  cardSrc: string;
  id: number;
  nearCard: NearCard;
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

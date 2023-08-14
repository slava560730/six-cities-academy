type FeaturesType = {
  entire: string;
  bedrooms: number | string;
  adults: number | string;
};

type OfferType = {
  cityName: string;
  locationLat: number;
  locationLong: number;
  locationZoom: number;
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
};

type ReviewsType = {
  count: number;
  src: string;
  userName: string;
  comment: string;
  date: string;
  id: number;
  rating: number;
};

export type {OfferType, ReviewsType};

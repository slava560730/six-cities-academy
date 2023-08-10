import { type } from "os";

type FeaturesType = {
  entire: string;
  bedrooms: number | string;
  adults: number | string;
};

type OfferType = {
  src: string[];
  mark: string;
  name: string;
  rating: number;
  features: FeaturesType;
  price: number | string;
  insideItem: string[];
};

type HostType = {
  src: string;
  name: string;
  status: string;
  text: string;
};

type ReviewsType = {
  count: number;
  src: string;
  userName: string;
  text: string;
};

export type {OfferType, HostType, ReviewsType};

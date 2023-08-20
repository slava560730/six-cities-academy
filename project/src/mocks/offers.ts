import {OfferType} from '../types/property';

const offers: OfferType[] = [
  {
    city:
      {
        cityName: 'Paris',
        locationLat: 52.3909553943508,
        locationLong: 4.85309666406198,
        locationZoom: 10,
      },
    images: [
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'description',
        id: 1,
      },
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'description',
        id: 2,
      },
    ],
    mark: 'Premium',
    title: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.5,
    isFavorite: true,
    features:
      {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
    price: 100,
    insideItems: [
      'Wi-Fi', 'Washing machine'
    ],
    host:
      {
        hostId: 24,
        hostSrc: 'img/avatar-angelina.jpg',
        hostName: 'Max',
        hostStatus: true,
        hostDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    cardSrc: 'img/apartment-02.jpg',
    id:4,
    nearCard: {
      src: 'img/room.jpg',
      price: 100,
      isFavorite: false,
      title: 'Wood and stone place',
      features: 'House',
      id: 1,
    },
  },
  {
    city:
      {
        cityName: 'Paris',
        locationLat: 52.3609553943508,
        locationLong: 4.85309666406198,
        locationZoom: 10,
      },
    images: [
      {
        imageSrc: 'img/apartment-03.jpg',
        imageAlt: 'description',
        id: 1,
      },
      {
        imageSrc: 'img/apartment-03.jpg',
        imageAlt: 'description',
        id: 2,
      },
    ],
    mark: 'Premium',
    title: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.0,
    isFavorite: true,
    features:
      {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
    price: 20,
    insideItems: [
      'Wi-Fi', 'Washing machine'
    ],
    host:
    {
      hostId: 24,
      hostSrc: 'img/avatar-angelina.jpg',
      hostName: 'Max',
      hostStatus: true,
      hostDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    cardSrc: 'img/apartment-03.jpg',
    id:1,
    nearCard: {
      src: 'img/room.jpg',
      price: 10,
      isFavorite: false,
      title: 'Wood and stone place',
      features: 'House',
      id: 10,
    },
  },
  {
    city:
      {
        cityName: 'Paris',
        locationLat: 52.3909553943508,
        locationLong: 4.929309666406198,
        locationZoom: 10,
      },
    images: [
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'description',
        id: 3,
      },
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'description',
        id: 1,
      },
    ],
    mark: 'Premium',
    title: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.9,
    isFavorite: true,
    features:
      {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
    price: 129,
    insideItems: [
      'Wi-Fi', 'Washing machine'
    ],
    host:
    {
      hostId: 24,
      hostSrc: 'img/avatar-angelina.jpg',
      hostName: 'Max',
      hostStatus: true,
      hostDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    cardSrc: 'img/apartment-01.jpg',
    id:2,
    nearCard: {
      src: 'img/room.jpg',
      price: 900,
      isFavorite: false,
      title: 'Wood and stone place',
      features: 'House',
      id: 3,
    },
  },
  {
    city:
      {
        cityName: 'Paris',
        locationLat: 52.3809553943508,
        locationLong: 4.939309666406198,
        locationZoom: 10,
      },
    images: [
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'description',
        id: 1,
      },
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'description',
        id: 2,
      },
    ],
    mark: 'Premium',
    title: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.1,
    isFavorite: true,
    features:
      {
        entire: 'Apartment',
        bedrooms: 3,
        adults: 4,
      },
    price: 1280,
    insideItems: [
      'Wi-Fi', 'Washing machine'
    ],
    host:
    {
      hostId: 24,
      hostSrc: 'img/avatar-angelina.jpg',
      hostName: 'Max',
      hostStatus: true,
      hostDescription: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    },
    cardSrc: 'img/apartment-01.jpg',
    id:3,
    nearCard: {
      src: 'img/room.jpg',
      price: 800,
      isFavorite: false,
      title: 'Wood and stone place',
      features: 'House',
      id: 11,
    },
  },
];


export {offers};

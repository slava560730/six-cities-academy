import {useAppSelector} from '../../hooks';
import {Card} from '../card/card';

type OfferListProps = {
  setSelectedOffer(value: number): void;
};

function OfferList({setSelectedOffer}: OfferListProps): JSX.Element {
  const offersCity = useAppSelector((state) => state.offerCity);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCity.map((offer) => (
        <Card setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {OfferList};

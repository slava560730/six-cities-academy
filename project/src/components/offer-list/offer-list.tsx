import {OfferType} from '../../types/property';
import {Card} from '../card/card';

type OfferListProps = {
  offers: OfferType[];
  setSelectedOffer(value: number): void;
};

function OfferList({offers, setSelectedOffer}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {OfferList};

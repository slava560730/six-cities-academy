import {OfferType} from '../../types/property';
import {Card} from '../card/card';

type OfferListProps = {
  offers: OfferType[];
  setActiveCard(value: number): void;
};

function OfferList({offers, setActiveCard}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card setActiveCard={setActiveCard} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {OfferList};

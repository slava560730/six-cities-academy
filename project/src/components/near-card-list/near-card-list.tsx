import {OfferType} from '../../types/property';
import { NearCard } from '../near-card/near-card';

type NearCardProps = {
  offers: OfferType[];
  setSelectedOffer(value: number): void;
};

function NearCardList({offers, setSelectedOffer}: NearCardProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <NearCard setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {NearCardList};

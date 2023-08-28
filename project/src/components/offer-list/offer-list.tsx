import {useAppSelector} from '../../hooks';
import {Card} from '../card/card';
import { getSortedOffers } from '../../store/app-process/selectors';

type OfferListProps = {
  setSelectedOffer(value: number): void;
};

function OfferList({setSelectedOffer}: OfferListProps): JSX.Element {
  const offersCity = useAppSelector(getSortedOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCity.map((offer) => (
        <Card setSelectedOffer={setSelectedOffer} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {OfferList};

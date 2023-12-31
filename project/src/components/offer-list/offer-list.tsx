import {useAppSelector} from '../../hooks';
import {Card} from '../card/card';
import { getSortedOffers } from '../../store/app-process/selectors';
import {NEED_MOUSE_LEAVE} from '../../const';

function OfferList(): JSX.Element {
  const offersCity = useAppSelector(getSortedOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersCity.map((offer) => (
        <Card isNeedMouseLeave={NEED_MOUSE_LEAVE} key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export {OfferList};

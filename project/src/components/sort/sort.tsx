import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortType} from '../../const';
import {sortOffers} from '../../store/action';
import cn from 'classnames';
import {useState} from 'react';

function Sort (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector((state) => state.currentSortType);
  const offersCity = useAppSelector((state) => state.offerCity);
  const [isActive, setIsActive] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': isActive})}>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.Popular})}
        onClick={() => dispatch(sortOffers(offersCity,SortType.Popular))}
        >
          Popular
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.PriceLowToHigh})}
        onClick={() => dispatch(sortOffers(offersCity, SortType.PriceLowToHigh))}
        >
          Price: low to high
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.PriceHighToLow})}
        onClick={() => dispatch(sortOffers(offersCity, SortType.PriceHighToLow))}
        >
          Price: high to low
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.TopRatedFirst})}
        onClick={() => dispatch(sortOffers(offersCity, SortType.TopRatedFirst))}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export {Sort};

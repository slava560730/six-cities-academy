import {useAppDispatch, useAppSelector} from '../../hooks';
import {SELECT_OPEN, SortType} from '../../const';
import cn from 'classnames';
import {useState} from 'react';
import { sortOffersType } from '../../store/app-process/app-process';
import { getCurrentSortType} from '../../store/app-process/selectors';

function Sort (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getCurrentSortType);
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
        onClick={() => {
          dispatch(
            sortOffersType({
              currentSortType: SortType.Popular,
              selectState: !SELECT_OPEN,
            })
          );
        }}
        >
          Popular
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.PriceLowToHigh})}
        onClick={() => {
          dispatch(
            sortOffersType({
              currentSortType: SortType.PriceLowToHigh,
              selectState: !SELECT_OPEN,
            })
          );
        }}
        >
          Price: low to high
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.PriceHighToLow})}
        onClick={() => {
          dispatch(
            sortOffersType({
              currentSortType: SortType.PriceHighToLow,
              selectState: !SELECT_OPEN,
            })
          );
        }}
        >
          Price: high to low
        </li>
        <li className={cn('places__option',
          {'places__option--active':currentSortType === SortType.TopRatedFirst})}
        onClick={() => {
          dispatch(
            sortOffersType({
              currentSortType: SortType.TopRatedFirst,
              selectState: !SELECT_OPEN,
            })
          );
        }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export {Sort};

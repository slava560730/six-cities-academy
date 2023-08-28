import { appProcess } from './app-process';
import { changeCity, sortOffersType } from "./app-process";
import {INITIAL_CITY, SortType} from '../../const';

describe ('Reducer: appProcess', () => {
  it ('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: INITIAL_CITY, currentSortType: SortType.Popular, selectState: false});
  });
});

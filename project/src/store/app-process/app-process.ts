import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Namespace, INITIAL_CITY, SortType, NULL_CITY_ID} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: INITIAL_CITY,
  currentSortType: SortType.Popular,
  selectState: false,
  currentId: NULL_CITY_ID,
};

const appProcess = createSlice({
  name: Namespace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffersType: (state, action: PayloadAction<{ currentSortType: string; selectState: boolean}>) => {
      state.currentSortType = action.payload.currentSortType;
      state.selectState = action.payload.selectState;
    },
    changeCurrentId: (state, action: PayloadAction<number | null>) => {
      state.currentId = action.payload;
    },
  },
});

export const {changeCurrentId, changeCity, sortOffersType } = appProcess.actions;
export {appProcess};

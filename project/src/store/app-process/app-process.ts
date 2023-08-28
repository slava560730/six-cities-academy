import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Namespace, INITIAL_CITY, SortType} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: INITIAL_CITY,
  currentSortType: SortType.Popular,
  selectState: false,
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
  },
});

export const { changeCity, sortOffersType } = appProcess.actions;
export {appProcess};

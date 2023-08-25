import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Namespace, INITIAL_CITY, SortType} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: INITIAL_CITY,
  currentSortType: SortType.Popular,
};

const appProcess = createSlice({
  name: Namespace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffersType: (state, action: PayloadAction<{ currentSortType: string; }>) => {
      state.currentSortType = action.payload.currentSortType;
    },
  },
});

export const { changeCity, sortOffersType } = appProcess.actions;

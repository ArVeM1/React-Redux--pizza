import { createSlice } from '@reduxjs/toolkit';
import { FilterSliceState, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
  searchValue: '',
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.categoryId = Number(action.payload.categoryId);
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC };
      }
    },
  },
});

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;

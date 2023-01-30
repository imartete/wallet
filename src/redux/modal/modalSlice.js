import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    modalIsOpen(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { modalIsOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

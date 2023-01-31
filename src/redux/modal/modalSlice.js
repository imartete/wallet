import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalAddTransaction: false,
    modalLogout: false,
  },
  reducers: {
    isModalAddTransaction(state, { payload }) {
      state.modalAddTransaction = payload;
    },
    isModalLogout(state, { payload }) {
      state.modalLogout = payload;
    },
  },
});

export const { isModalAddTransaction, isModalLogout } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

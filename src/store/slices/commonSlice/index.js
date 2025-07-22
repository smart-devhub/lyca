// src/features/user/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initState = {
  isToggle: false,
  theme: 'dark',
  isDrawer: false,
  editData: null,
  smsMaskingList: [],
  isNoticePopupConfirmed: false,
  clearTableSelectedRows: false,
};
export const commonSlice = createSlice({
  name: 'commonState',
  initialState: initState,
  reducers: {
    togglesidebar: state => {
      state.isToggle = !state.isToggle;
    },
    toggleDrawer: state => {
      state.isDrawer = !state.isDrawer;
    },
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    toggleNoticPopup: state => {
      state.isNoticePopupConfirmed = true;
    },
    handleClearTableRows: (state, action) => {
      state.clearTableSelectedRows = action.payload;
    },
    handleSetSmsMaksing: (state, action) => {
      state.smsMaskingList = action.payload;
    },
  },
});

export const {
  togglesidebar,
  toggleTheme,
  toggleDrawer,
  toggleNoticPopup,
  handleClearTableRows,
  handleSetSmsMaksing,
} = commonSlice.actions;

export default commonSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: { open: false, message: "", type: "success" },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.snackbar = { open: true, ...action.payload };
    },
    hideSnackbar: (state) => {
      state.snackbar.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = appSlice.actions;
export default appSlice.reducer;
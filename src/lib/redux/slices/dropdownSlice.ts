import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleState: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

//actions Export
export const { toggleState } = dropdownSlice.actions;
export default dropdownSlice.reducer;

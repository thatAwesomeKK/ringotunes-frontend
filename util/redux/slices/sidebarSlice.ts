import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleState: (state, action) => {
            state.isOpen = action.payload
        },
    }
})

//actions Export
export const { toggleState } = sidebarSlice.actions

//Selectors
export const selectToggle = (state: any) => state.sidebar.isOpen

export default sidebarSlice.reducer
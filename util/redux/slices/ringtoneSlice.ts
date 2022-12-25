import { createSlice } from "@reduxjs/toolkit";

export const ringtoneSlice = createSlice({
    name: 'ringtone',
    initialState: {
        id: null,
    },
    reducers: {
        storeRing: (state, action) => {
            state.id = action.payload
        },
        removeRing: (state) => {
            state.id = null
        },
    }
})

//actions Export
export const { storeRing, removeRing } = ringtoneSlice.actions

//Selectors
export const selectRing = (state: any) => state.ringtone.id

export default ringtoneSlice.reducer
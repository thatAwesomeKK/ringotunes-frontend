import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'accessToken',
    initialState: {
        token: "",
    },
    reducers: {
        storeToken: (state, action) => {
            state.token = action.payload
        },
    }
})

//actions Export
export const { storeToken } = tokenSlice.actions

//Selectors
export const selectToken = (state: any) => state.accessToken.token

export default tokenSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
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
export const { storeToken } = accessTokenSlice.actions
export default accessTokenSlice.reducer
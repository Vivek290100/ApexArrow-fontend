import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./aurhSlice"

const store = configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import datailSlice from "./slice/datailSlice";
import cocktailSlice from "./slice/cocktailSlice";


const store = configureStore({
    reducer: {
        cocktails: cocktailSlice,
        datails: datailSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
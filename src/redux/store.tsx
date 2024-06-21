import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./queries/ProductApi";
import { CartSlice } from "./slice/Cart.Slice";


export const Store = configureStore({
    reducer:{
         // Add the generated reducer as a specific top-level slice
        [productApi.reducerPath]:productApi.reducer,
        [CartSlice.name] : CartSlice.reducer
    },
     // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
    middleware:(d)=>d().concat(productApi.middleware)
})

setupListeners(Store.dispatch)